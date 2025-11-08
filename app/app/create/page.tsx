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

export default function CreateDemoPage() {
  const [loading, setLoading] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({
    businessType: 'gym',
    businessName: '',
    primaryColor: '#3b82f6',
    accentColor: '#ef4444',
    backgroundColor: '#ffffff',
    backgroundOpacity: 100,
    titleFont: 'sans',
    tagline: '',
    phoneNumber: '',
    address: ''
  })

  const [heroFile, setHeroFile] = useState<File | null>(null)
  const [heroPreviewUrl, setHeroPreviewUrl] = useState<string | null>(null)
  const [heroImageUrl, setHeroImageUrl] = useState<string>('')
  const [classImage1File, setClassImage1File] = useState<File | null>(null)
  const [classImage1PreviewUrl, setClassImage1PreviewUrl] = useState<string | null>(null)
  const [classImage1Url, setClassImage1Url] = useState<string>('')
  const [classImage2File, setClassImage2File] = useState<File | null>(null)
  const [classImage2PreviewUrl, setClassImage2PreviewUrl] = useState<string | null>(null)
  const [classImage2Url, setClassImage2Url] = useState<string>('')
  const [classImage3File, setClassImage3File] = useState<File | null>(null)
  const [classImage3PreviewUrl, setClassImage3PreviewUrl] = useState<string | null>(null)
  const [classImage3Url, setClassImage3Url] = useState<string>('')
  const [aboutImageFile, setAboutImageFile] = useState<File | null>(null)
  const [aboutImagePreviewUrl, setAboutImagePreviewUrl] = useState<string | null>(null)
  const [aboutImageUrl, setAboutImageUrl] = useState<string>('')

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      let finalHeroImageUrl: string | undefined
      if (heroFile) {
        // upload hero image and get URL
        finalHeroImageUrl = await FirebaseStorageManager.uploadHeroImage(heroFile)
      } else if (heroImageUrl.trim()) {
        finalHeroImageUrl = heroImageUrl.trim()
      }
      
      let finalClassImage1Url: string | undefined
      if (classImage1File) {
        finalClassImage1Url = await FirebaseStorageManager.uploadHeroImage(classImage1File)
      } else if (classImage1Url.trim()) {
        finalClassImage1Url = classImage1Url.trim()
      }
      
      let finalClassImage2Url: string | undefined
      if (classImage2File) {
        finalClassImage2Url = await FirebaseStorageManager.uploadHeroImage(classImage2File)
      } else if (classImage2Url.trim()) {
        finalClassImage2Url = classImage2Url.trim()
      }
      
      let finalClassImage3Url: string | undefined
      if (classImage3File) {
        finalClassImage3Url = await FirebaseStorageManager.uploadHeroImage(classImage3File)
      } else if (classImage3Url.trim()) {
        finalClassImage3Url = classImage3Url.trim()
      }
      
      let finalAboutImageUrl: string | undefined
      if (aboutImageFile) {
        finalAboutImageUrl = await FirebaseStorageManager.uploadHeroImage(aboutImageFile)
      } else if (aboutImageUrl.trim()) {
        finalAboutImageUrl = aboutImageUrl.trim()
      }
      
      // Save website to storage
      const demo = await FirebaseStorageManager.saveDemo({
        businessType: formData.businessType,
        businessName: formData.businessName,
        tagline: formData.tagline,
        pages: 5, // Fixed to 5 pages
        primaryColor: formData.primaryColor,
        accentColor: formData.accentColor,
        backgroundColor: formData.backgroundColor,
        backgroundOpacity: formData.backgroundOpacity,
        titleFont: formData.titleFont,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        heroImageUrl: finalHeroImageUrl,
        classImage1Url: finalClassImage1Url,
        classImage2Url: finalClassImage2Url,
        classImage3Url: finalClassImage3Url,
        aboutImageUrl: finalAboutImageUrl
      })

      // Redirect to success page
      window.location.href = `/app/success?demoId=${demo.id}&url=${encodeURIComponent(`/d/${demo.id}`)}`
      
    } catch (error) {
      console.error('Error creating website:', error)
      alert('Failed to create website. Please try again.')
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
              <h1 className="text-3xl font-bold text-gray-900">Create Website</h1>
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
                {/* Hero Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                  <div className="space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const f = e.target.files?.[0] ?? null
                        setHeroFile(f)
                        if (f) {
                          setHeroPreviewUrl(URL.createObjectURL(f))
                          setHeroImageUrl('')
                        } else {
                          setHeroPreviewUrl(null)
                        }
                      }}
                      className="w-full"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">OR</span>
                    </div>
                    <input
                      type="url"
                      value={heroImageUrl}
                      onChange={(e) => {
                        setHeroImageUrl(e.target.value)
                        if (e.target.value.trim()) {
                          setHeroPreviewUrl(e.target.value.trim())
                          setHeroFile(null)
                        } else {
                          setHeroPreviewUrl(null)
                        }
                      }}
                      placeholder="Or paste image URL (https://...)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 text-sm"
                    />
                  </div>
                  {heroPreviewUrl && (
                    <img src={heroPreviewUrl} alt="Hero preview" className="mt-3 h-40 w-full object-cover rounded-lg" />
                  )}
                </div>

                {/* Class Images Upload - Only for Gym */}
                {formData.businessType === 'gym' && (
                  <div className="space-y-4">
                    <div className="border-t pt-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Images</h3>
                      
                      {/* Class Image 1 */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Class Image 1</label>
                        <div className="space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const f = e.target.files?.[0] ?? null
                              setClassImage1File(f)
                              if (f) {
                                setClassImage1PreviewUrl(URL.createObjectURL(f))
                                setClassImage1Url('')
                              } else {
                                setClassImage1PreviewUrl(null)
                              }
                            }}
                            className="w-full"
                          />
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">OR</span>
                          </div>
                          <input
                            type="url"
                            value={classImage1Url}
                            onChange={(e) => {
                              setClassImage1Url(e.target.value)
                              if (e.target.value.trim()) {
                                setClassImage1PreviewUrl(e.target.value.trim())
                                setClassImage1File(null)
                              } else {
                                setClassImage1PreviewUrl(null)
                              }
                            }}
                            placeholder="Or paste image URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          />
                        </div>
                        {classImage1PreviewUrl && (
                          <img src={classImage1PreviewUrl} alt="Class 1 preview" className="mt-3 h-32 w-full object-cover rounded-lg" />
                        )}
                      </div>

                      {/* Class Image 2 */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Class Image 2</label>
                        <div className="space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const f = e.target.files?.[0] ?? null
                              setClassImage2File(f)
                              if (f) {
                                setClassImage2PreviewUrl(URL.createObjectURL(f))
                                setClassImage2Url('')
                              } else {
                                setClassImage2PreviewUrl(null)
                              }
                            }}
                            className="w-full"
                          />
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">OR</span>
                          </div>
                          <input
                            type="url"
                            value={classImage2Url}
                            onChange={(e) => {
                              setClassImage2Url(e.target.value)
                              if (e.target.value.trim()) {
                                setClassImage2PreviewUrl(e.target.value.trim())
                                setClassImage2File(null)
                              } else {
                                setClassImage2PreviewUrl(null)
                              }
                            }}
                            placeholder="Or paste image URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          />
                        </div>
                        {classImage2PreviewUrl && (
                          <img src={classImage2PreviewUrl} alt="Class 2 preview" className="mt-3 h-32 w-full object-cover rounded-lg" />
                        )}
                      </div>

                      {/* Class Image 3 */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Class Image 3</label>
                        <div className="space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const f = e.target.files?.[0] ?? null
                              setClassImage3File(f)
                              if (f) {
                                setClassImage3PreviewUrl(URL.createObjectURL(f))
                                setClassImage3Url('')
                              } else {
                                setClassImage3PreviewUrl(null)
                              }
                            }}
                            className="w-full"
                          />
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">OR</span>
                          </div>
                          <input
                            type="url"
                            value={classImage3Url}
                            onChange={(e) => {
                              setClassImage3Url(e.target.value)
                              if (e.target.value.trim()) {
                                setClassImage3PreviewUrl(e.target.value.trim())
                                setClassImage3File(null)
                              } else {
                                setClassImage3PreviewUrl(null)
                              }
                            }}
                            placeholder="Or paste image URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          />
                        </div>
                        {classImage3PreviewUrl && (
                          <img src={classImage3PreviewUrl} alt="Class 3 preview" className="mt-3 h-32 w-full object-cover rounded-lg" />
                        )}
                      </div>

                      {/* About Section Image */}
                      <div className="mb-4 pt-4 border-t">
                        <label className="block text-sm font-medium text-gray-700 mb-2">About Section Image</label>
                        <div className="space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const f = e.target.files?.[0] ?? null
                              setAboutImageFile(f)
                              if (f) {
                                setAboutImagePreviewUrl(URL.createObjectURL(f))
                                setAboutImageUrl('')
                              } else {
                                setAboutImagePreviewUrl(null)
                              }
                            }}
                            className="w-full"
                          />
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">OR</span>
                          </div>
                          <input
                            type="url"
                            value={aboutImageUrl}
                            onChange={(e) => {
                              setAboutImageUrl(e.target.value)
                              if (e.target.value.trim()) {
                                setAboutImagePreviewUrl(e.target.value.trim())
                                setAboutImageFile(null)
                              } else {
                                setAboutImagePreviewUrl(null)
                              }
                            }}
                            placeholder="Or paste image URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          />
                        </div>
                        {aboutImagePreviewUrl && (
                          <img src={aboutImagePreviewUrl} alt="About preview" className="mt-3 h-32 w-full object-cover rounded-lg" />
                        )}
                      </div>
                    </div>
                  </div>
                )}

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

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
                  />
                </div>

                {/* Address / Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address / Location
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder='Paste Google Maps embed code or enter address'
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 text-sm font-mono"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    💡 <strong>For best results with marker:</strong> Google Maps → Find location → Click "Share" → "Embed a map" tab → Copy HTML code → Paste entire code here
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Or simply enter the full address (e.g., "123 Main St, New York, NY 10001")
                  </p>
                </div>

                {/* Color Scheme (Primary & Accent) */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Palette className="inline h-4 w-4 mr-1" />
                      Primary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={formData.primaryColor}
                        onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                        className="h-12 w-20 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                      />
                      <input
                        type="text"
                        value={formData.primaryColor.toUpperCase()}
                        onChange={(e) => {
                          const value = e.target.value
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
                            handleInputChange('primaryColor', value)
                          }
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 font-mono"
                        placeholder="#3B82F6"
                        maxLength={7}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Palette className="inline h-4 w-4 mr-1" />
                      Accent Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={formData.accentColor}
                        onChange={(e) => handleInputChange('accentColor', e.target.value)}
                        className="h-12 w-20 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                      />
                      <input
                        type="text"
                        value={formData.accentColor.toUpperCase()}
                        onChange={(e) => {
                          const value = e.target.value
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
                            handleInputChange('accentColor', value)
                          }
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 font-mono"
                        placeholder="#EF4444"
                        maxLength={7}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Palette className="inline h-4 w-4 mr-1" />
                      Background Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={formData.backgroundColor}
                        onChange={(e) => handleInputChange('backgroundColor', e.target.value)}
                        className="h-12 w-20 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                      />
                      <input
                        type="text"
                        value={formData.backgroundColor.toUpperCase()}
                        onChange={(e) => {
                          const value = e.target.value
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
                            handleInputChange('backgroundColor', value)
                          }
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900 font-mono"
                        placeholder="#FFFFFF"
                        maxLength={7}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Opacity: {formData.backgroundOpacity}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={formData.backgroundOpacity}
                        onChange={(e) => handleInputChange('backgroundOpacity', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Transparent</span>
                        <span>Opaque</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title Font Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title Font Style</label>
                  <select
                    value={formData.titleFont}
                    onChange={(e) => handleInputChange('titleFont', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
                  >
                    <optgroup label="Sans Serif">
                      <option value="sans">Inter (Clean & Modern)</option>
                      <option value="roboto">Roboto (Google Default)</option>
                      <option value="open-sans">Open Sans (Friendly)</option>
                      <option value="lato">Lato (Professional)</option>
                      <option value="montserrat">Montserrat (Geometric)</option>
                      <option value="poppins">Poppins (Rounded)</option>
                      <option value="raleway">Raleway (Elegant)</option>
                      <option value="nunito">Nunito (Soft & Friendly)</option>
                    </optgroup>
                    <optgroup label="Serif">
                      <option value="serif">Merriweather (Classic)</option>
                      <option value="playfair">Playfair Display (Luxury)</option>
                      <option value="lora">Lora (Beautiful)</option>
                      <option value="crimson">Crimson Text (Editorial)</option>
                    </optgroup>
                    <optgroup label="Display & Special">
                      <option value="display">Oswald (Bold Display)</option>
                      <option value="bebas">Bebas Neue (Strong)</option>
                      <option value="anton">Anton (Impact)</option>
                      <option value="righteous">Righteous (Retro)</option>
                    </optgroup>
                    <optgroup label="Monospace">
                      <option value="mono">Fira Code (Technical)</option>
                      <option value="space-mono">Space Mono (Modern Tech)</option>
                    </optgroup>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || !formData.businessName}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Website...' : 'Generate Website'}
                </button>
              </form>
            </div>

            {/* Preview */}
            {previewMode && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-6 py-3 border-b">
                  <h3 className="text-lg font-medium text-gray-900">Live Preview</h3>
                </div>
                <div className="h-96 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
                  <div className="scale-50 origin-top-left w-[200%] h-[200%]" style={{ willChange: 'transform', pointerEvents: 'auto' }}>
                    <TemplateRenderer 
                      key={formData.businessType}
                      data={{
                        businessName: formData.businessName || 'Your Business Name',
                        businessType: formData.businessType,
                        tagline: formData.tagline || 'Your business tagline',
                        pages: 5,
                        primaryColor: formData.primaryColor,
                        accentColor: formData.accentColor,
                        backgroundColor: formData.backgroundColor,
                        backgroundOpacity: formData.backgroundOpacity,
                        titleFont: formData.titleFont,
                        phoneNumber: formData.phoneNumber,
                        address: formData.address,
                        heroImageUrl: heroPreviewUrl ?? undefined,
                        classImage1Url: classImage1PreviewUrl ?? undefined,
                        classImage2Url: classImage2PreviewUrl ?? undefined,
                        classImage3Url: classImage3PreviewUrl ?? undefined,
                        aboutImageUrl: aboutImagePreviewUrl ?? undefined
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
