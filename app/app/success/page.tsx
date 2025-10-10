'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Copy, ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  const [demoId, setDemoId] = useState('')
  const [demoUrl, setDemoUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('demoId')
    const url = urlParams.get('url')
    
    if (id) setDemoId(id)
    if (url) setDemoUrl(decodeURIComponent(url))
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${demoUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Demo Created Successfully!
          </h1>
          <p className="text-gray-600 mb-6">
            Your demo website is ready to share with prospects.
          </p>
          
          {demoId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500 mb-2">Demo ID:</p>
              <p className="font-mono text-lg font-semibold text-gray-900">{demoId}</p>
            </div>
          )}

          {demoUrl && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <span className="text-sm text-gray-600 truncate mr-2">
                  {window.location.origin}{demoUrl}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center text-primary-600 hover:text-primary-700 text-sm"
                >
                  <Copy className="h-4 w-4 mr-1" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Demo
              </a>
            </div>
          )}

          <div className="mt-8 space-y-3">
            <Link
              href="/app"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            
            <Link
              href="/app/create"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Create Another Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}