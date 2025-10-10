'use client'

import { useState } from 'react'
import { ArrowLeft, Palette, Eye } from 'lucide-react'
import Link from 'next/link'
import { FirebaseStorageManager } from '../../../lib/firebaseStorage'
import { TemplateRenderer } from '../../../components/templates/TemplateRenderer'

const BUSINESS_TYPES = [
  { value: 'gym', label: 'Gym' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'cafe', label: 'Cafe' },
  { value: 'jewelry', label: 'Jewelry' },
  { value: 'salon', label: 'Salon' }
]

const COLOR_PRESETS = [
  '#3b82f6', // Blue
  '#ef4444', // Red
  '#10b981', // Green
  '#f59e0b', // Yellow
  '#8b5cf6', // Purple
  '#ec4899', // Pink
  '#06b6d4', // Cyan
  '#84cc16', // Lime
]

export default function CreateDemoPage() {
  const [loading, setLoading] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({
    businessType: 'gym',
    businessName: '',
    primaryColor: '#3b82f6',
    tagline: ''
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Save demo to Firestore
      const demo = await FirebaseStorageManager.saveDemo({
        businessType: formData.businessType,
        businessName: formData.businessName,
        tagline: formData.tagline,
        pages: 5, // Fixed to 5 pages
        primaryColor: formData.primaryColor
      })

      // Redirect to success page
      window.location.href = `/app/success?demoId=${demo.id}&url=${encodeURIComponent(`/d/${demo.id}`)}`
      
    } catch (error) {
      console.error('Error creating demo:', error)
      alert('Failed to create demo. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link
                href="/app"
                className="mr-4 p-2 text-gray-400 hover:text-gray-600"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Create Demo</h1>
            </div>
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Eye className="h-4 w-4 mr-2" />
              {previewMode ? 'Hide Preview' : 'Show Preview'}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white shadow rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
                  >
                    {BUSINESS_TYPES.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="Enter your business name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
                    required
                  />
                </div>

                {/* Tagline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => handleInputChange('tagline', e.target.value)}
                    placeholder="Your tagline here"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
                  />
                </div>


                {/* Color Scheme */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Palette className="inline h-4 w-4 mr-1" />
                    Primary Color
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={formData.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      className="h-10 w-16 border border-gray-300 rounded cursor-pointer"
                    />
                    <div className="flex space-x-1">
                      {COLOR_PRESETS.map(color => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleInputChange('primaryColor', color)}
                          className="w-8 h-8 rounded border-2 border-gray-300 hover:border-gray-400"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || !formData.businessName}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Demo...' : 'Generate Demo'}
                </button>
              </form>
            </div>

            {/* Preview */}
            {previewMode && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-6 py-3 border-b">
                  <h3 className="text-lg font-medium text-gray-900">Live Preview</h3>
                </div>
                <div className="h-96 overflow-y-auto">
                  <div className="scale-50 origin-top-left w-[200%] h-[200%]">
                    <TemplateRenderer 
                      data={{
                        businessName: formData.businessName || 'Your Business Name',
                        businessType: formData.businessType,
                        tagline: formData.tagline || 'Your business tagline',
                        pages: 5,
                        primaryColor: formData.primaryColor
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
