'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Regrowth Demo Builder</h1>
              <p className="text-gray-600">Create shareable demo websites for your prospects</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/app"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Go to App
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Welcome to Regrowth Demo Builder
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create professional, shareable demo websites for gyms, restaurants, cafes, 
              jewelry stores, and salons in minutes. Perfect for sales presentations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">🎨 5 Business Templates</h3>
                <p className="text-gray-600">Unique designs for gym, restaurant, cafe, jewelry, and salon businesses</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">📸 Stock Images</h3>
                <p className="text-gray-600">Automatic Unsplash integration with professional photos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">⏰ Auto-Expiry</h3>
                <p className="text-gray-600">Demos automatically delete after 3 days for security</p>
              </div>
            </div>

            <div className="space-x-4">
              <Link
                href="/app"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Start Creating Demos
              </Link>
              <Link
                href="/app/create"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Create Demo Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
