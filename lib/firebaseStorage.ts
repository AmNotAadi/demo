import { db, storage } from './firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  deleteDoc,
  query,
  orderBy,
  increment,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

export interface Demo {
  id: string
  businessType: string
  businessName: string
  tagline: string
  pages: number
  primaryColor: string
  accentColor?: string
  backgroundColor?: string
  backgroundOpacity?: number
  titleFont?: string
  phoneNumber?: string
  address?: string
  logoUrl?: string
  heroImageUrl?: string
  classImage1Url?: string
  classImage2Url?: string
  classImage3Url?: string
  aboutImageUrl?: string
  createdAt: number
  views: number
}

interface DemoStats {
  totalDemos: number
  totalViews: number
  activeDemos: number
}

// LOCAL STORAGE MOCK - No Firebase required
const LOCAL_STORAGE_KEY = 'regrowth_demos'

function getLocalDemos(): Demo[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

function saveLocalDemos(demos: Demo[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(demos))
}

export class FirebaseStorageManager {
  private static readonly DEMOS_COLLECTION = 'demos'

  static async saveDemo(data: Omit<Demo, 'id' | 'createdAt' | 'views'>): Promise<Demo> {
    const id = uuidv4()
    const newDemo: Demo = {
      id,
      createdAt: Date.now(),
      views: 0,
      ...data,
    }

    // Save to Firebase
    await setDoc(doc(db, this.DEMOS_COLLECTION, id), {
      ...newDemo,
      timestamp: serverTimestamp()
    })

    // Also save to local storage as backup/cache
    const demos = getLocalDemos()
    demos.unshift(newDemo)
    saveLocalDemos(demos)

    return newDemo
  }

  static async uploadHeroImage(file: File): Promise<string> {
    // Upload to Firebase Storage
    const path = `demos/${uuidv4()}`
    const storageRef = ref(storage, path)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  }

  static async getDemo(id: string): Promise<Demo | undefined> {
    // Try Firebase first
    try {
      const docRef = doc(db, this.DEMOS_COLLECTION, id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return docSnap.data() as Demo
      }
    } catch (error) {
      console.warn('Firebase fetch failed, falling back to local storage:', error)
    }

    // Fallback to local storage
    const demos = getLocalDemos()
    return demos.find(d => d.id === id)
  }

  static async getAllDemos(): Promise<Demo[]> {
    // Try Firebase first
    try {
      const q = query(
        collection(db, this.DEMOS_COLLECTION),
        orderBy('createdAt', 'desc')
      )
      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(doc => doc.data() as Demo)
    } catch (error) {
      console.warn('Firebase fetch failed, falling back to local storage:', error)
      // Fallback to local storage
      return getLocalDemos()
    }
  }

  static async deleteDemo(id: string): Promise<void> {
    // Delete from Firebase
    try {
      await deleteDoc(doc(db, this.DEMOS_COLLECTION, id))
    } catch (error) {
      console.warn('Firebase delete failed:', error)
    }

    // Also delete from local storage
    const demos = getLocalDemos()
    const filtered = demos.filter(d => d.id !== id)
    saveLocalDemos(filtered)
  }

  static async recordView(id: string): Promise<void> {
    // Update Firebase
    try {
      const docRef = doc(db, this.DEMOS_COLLECTION, id)
      await updateDoc(docRef, {
        views: increment(1)
      })
    } catch (error) {
      console.warn('Firebase view recording failed:', error)
    }

    // Also update local storage
    const demos = getLocalDemos()
    const demo = demos.find(d => d.id === id)
    if (demo) {
      demo.views++
      saveLocalDemos(demos)
    }
  }

  static async getStats(): Promise<DemoStats> {
    const demos = await this.getAllDemos()
    const totalDemos = demos.length
    const totalViews = demos.reduce((sum, demo) => sum + demo.views, 0)
    const activeDemos = demos.filter(demo => 
      (Date.now() - demo.createdAt) < (3 * 24 * 60 * 60 * 1000)
    ).length

    return { totalDemos, totalViews, activeDemos }
  }
}

