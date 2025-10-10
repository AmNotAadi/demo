'use client'

import { useState, useEffect } from 'react'
import { FirebaseStorageManager, Demo } from '../../../lib/firebaseStorage'
import { TemplateRenderer } from '../../../components/templates/TemplateRenderer'

interface DemoViewerProps {
  params: {
    demoId: string
  }
}

export default function DemoViewer({ params }: DemoViewerProps) {
  const [demo, setDemo] = useState<Demo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDemo = async () => {
      const demoData = await FirebaseStorageManager.getDemo(params.demoId)
      if (demoData) {
        setDemo(demoData)
        // Record a view
        await FirebaseStorageManager.recordView(params.demoId)
      }
      setLoading(false)
    }
    
    loadDemo()
  }, [params.demoId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Demo Not Found</h1>
          <p className="text-gray-600 mb-8">The demo you're looking for doesn't exist or has been deleted.</p>
          <a href="/" className="text-primary-600 hover:text-primary-500">Go Home</a>
        </div>
      </div>
    )
  }

  // Convert LocalDemo to TemplateData format
  const templateData = {
    businessName: demo.businessName,
    businessType: demo.businessType,
    tagline: demo.tagline,
    pages: demo.pages,
    primaryColor: demo.primaryColor,
    logoUrl: demo.logoUrl
  }

  return <TemplateRenderer data={templateData} />
}