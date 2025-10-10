'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function DemoPageClient() {
  const params = useParams()
  const demoId = params.demoId as string

  useEffect(() => {
    // Record view when component mounts
    fetch(`/api/record-view?demoId=${demoId}`)
      .catch(error => console.error('Failed to record view:', error))
  }, [demoId])

  return null
}
