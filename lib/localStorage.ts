// Local storage utilities for demo testing
export interface LocalDemo {
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

export class LocalStorageManager {
  private static DEMOS_KEY = 'regrowth_demos'
  private static VIEWS_KEY = 'regrowth_views'

  // Save demo to local storage
  static saveDemo(demo: Omit<LocalDemo, 'id' | 'createdAt' | 'views'>): LocalDemo {
    const demos = this.getAllDemos()
    const newDemo: LocalDemo = {
      ...demo,
      id: this.generateId(),
      createdAt: Date.now(),
      views: 0
    }
    
    demos.push(newDemo)
    localStorage.setItem(this.DEMOS_KEY, JSON.stringify(demos))
    return newDemo
  }

  // Get all demos
  static getAllDemos(): LocalDemo[] {
    const stored = localStorage.getItem(this.DEMOS_KEY)
    return stored ? JSON.parse(stored) : []
  }

  // Get demo by ID
  static getDemo(id: string): LocalDemo | null {
    const demos = this.getAllDemos()
    return demos.find(demo => demo.id === id) || null
  }

  // Record a view
  static recordView(demoId: string): void {
    const demos = this.getAllDemos()
    const demo = demos.find(d => d.id === demoId)
    if (demo) {
      demo.views++
      localStorage.setItem(this.DEMOS_KEY, JSON.stringify(demos))
    }
  }

  // Delete demo
  static deleteDemo(id: string): void {
    const demos = this.getAllDemos()
    const filtered = demos.filter(demo => demo.id !== id)
    localStorage.setItem(this.DEMOS_KEY, JSON.stringify(filtered))
  }

  // Get stats
  static getStats() {
    const demos = this.getAllDemos()
    return {
      totalDemos: demos.length,
      totalViews: demos.reduce((sum, demo) => sum + demo.views, 0),
      activeDemos: demos.length // All demos are "active" in local mode
    }
  }

  // Generate unique ID
  private static generateId(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  // Convert file to data URL for local storage
  static fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }
}
