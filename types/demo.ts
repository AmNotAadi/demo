export interface DemoData {
  demoId: string
  businessType: 'gym' | 'restaurant' | 'cafe' | 'jewelry' | 'salon'
  businessName: string
  tagline: string
  theme: {
    primaryColor: string
    font: string
  }
  pages: Array<{
    slug: string
    title: string
    sections: Array<{
      type: string
      title?: string
      subtitle?: string
      image?: string
      logo?: string
      items?: Array<{
        name: string
        description: string
        text?: string
        author?: string
      }>
    }>
  }>
  images: {
    hero: string
    gallery: string[]
  }
  createdAt: number
  expireAt: number
}

export interface DemoMeta {
  demoId: string
  createdBy: {
    uid: string
    email: string
  }
  formInputs: {
    businessType: string
    businessName: string
    pages: number
    primaryColor: string
    tagline: string
    logoPath: string
  }
  createdAt: number
  deleted: boolean
}

export interface DemoView {
  demoId: string
  viewedAt: number
  viewerAgent: string
  viewerIpHash: string
}
