import { db } from './firebase'
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
  logoUrl?: string
  createdAt: number
  views: number
}

interface DemoStats {
  totalDemos: number
  totalViews: number
  activeDemos: number
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

    await setDoc(doc(db, this.DEMOS_COLLECTION, id), {
      ...newDemo,
      timestamp: serverTimestamp()
    })

    return newDemo
  }

  static async getDemo(id: string): Promise<Demo | undefined> {
    const docRef = doc(db, this.DEMOS_COLLECTION, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data() as Demo
    }
    return undefined
  }

  static async getAllDemos(): Promise<Demo[]> {
    const q = query(
      collection(db, this.DEMOS_COLLECTION),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    
    return querySnapshot.docs.map(doc => doc.data() as Demo)
  }

  static async deleteDemo(id: string): Promise<void> {
    await deleteDoc(doc(db, this.DEMOS_COLLECTION, id))
  }

  static async recordView(id: string): Promise<void> {
    const docRef = doc(db, this.DEMOS_COLLECTION, id)
    await updateDoc(docRef, {
      views: increment(1)
    })
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

