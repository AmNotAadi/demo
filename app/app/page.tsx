'use client'

import { useState, useEffect } from 'react'
import { Plus, Eye, Copy, ExternalLink, BarChart3, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { FirebaseStorageManager, Demo } from '../../lib/firebaseStorage'

export default function AppDashboard() {
  const [demos, setDemos] = useState<Demo[]>([])
  const [stats, setStats] = useState({ totalDemos: 0, totalViews: 0, activeDemos: 0 })

  useEffect(() => {
    // Load demos and stats from Firestore
    const loadData = async () => {
      const allDemos = await FirebaseStorageManager.getAllDemos()
      const demoStats = await FirebaseStorageManager.getStats()
      
      setDemos(allDemos)
      setStats(demoStats)
    }
    
    loadData()
  }, [])

  const deleteDemo = async (id: string) => {
    if (confirm('Are you sure you want to delete this demo?')) {
      await FirebaseStorageManager.deleteDemo(id)
      const updatedDemos = await FirebaseStorageManager.getAllDemos()
      const updatedStats = await FirebaseStorageManager.getStats()
      setDemos(updatedDemos)
      setStats(updatedStats)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Demo Builder</h1>
              <p className="text-gray-600">Welcome! Create and manage your demo websites</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/app/create"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Demo
              </Link>
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Eye className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Demos
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.activeDemos}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Views
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.totalViews}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Copy className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Demos Created
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.totalDemos}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Demos */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Demos
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Your recently created demo websites
              </p>
            </div>
            <div className="border-t border-gray-200">
              {demos.length === 0 ? (
                <div className="px-4 py-5 sm:px-6 text-center text-gray-500">
                  No demos created yet. <Link href="/app/create" className="text-primary-600 hover:text-primary-500">Create your first demo</Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Demo ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Business
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Views
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Created
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {demos.map((demo) => (
                        <tr key={demo.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {demo.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {demo.businessName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                            {demo.businessType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {demo.views}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(demo.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <a
                                href={`/d/${demo.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-900"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                              <button
                                onClick={() => deleteDemo(demo.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/app/create"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <Plus className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Create New Demo</h3>
                <p className="text-gray-600">Start building a demo website for your prospect</p>
              </div>
            </Link>

            <Link
              href="/app/admin"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Admin Dashboard</h3>
                <p className="text-gray-600">View analytics and manage all demos</p>
              </div>
            </Link>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <ExternalLink className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Clear All Data</h3>
                <p className="text-gray-600">Reset local storage for testing</p>
                <button 
                  onClick={() => {
                    if (confirm('Clear all demo data?')) {
                      localStorage.clear()
                      window.location.reload()
                    }
                  }}
                  className="mt-4 text-red-600 hover:text-red-500 text-sm"
                >
                  Clear Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
