'use client'

import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BarChart3, Users, Eye, Trash2, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface DemoMeta {
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

interface DemoView {
  demoId: string
  viewedAt: number
  viewerAgent: string
  viewerIpHash: string
}

export default function AdminDashboard() {
  const { user, isAdmin } = useAuth()
  const router = useRouter()
  const [demos, setDemos] = useState<DemoMeta[]>([])
  const [views, setViews] = useState<DemoView[]>([])
  const [loading, setLoading] = useState(true)
  const [showRawInputs, setShowRawInputs] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }

    if (!isAdmin) {
      router.push('/app')
      return
    }

    // In a real implementation, you would fetch from Firestore
    // For now, we'll simulate with empty data
    setLoading(false)
  }, [user, isAdmin, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!isAdmin) return null

  const totalViews = views.length
  const totalDemos = demos.length
  const activeDemos = demos.filter(demo => !demo.deleted).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Audit logs and demo management</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/app"
                className="text-gray-500 hover:text-gray-700"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Demos
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">{totalDemos}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Eye className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Views
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">{totalViews}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Demos
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">{activeDemos}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Demo Management
                </h3>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={showRawInputs}
                      onChange={(e) => setShowRawInputs(e.target.checked)}
                      className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Show Raw Inputs</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Logs Table */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Demo Audit Logs
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Complete audit trail of all demo creations
              </p>
            </div>
            <div className="border-t border-gray-200">
              {demos.length === 0 ? (
                <div className="px-4 py-5 sm:px-6 text-center text-gray-500">
                  No demos created yet
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
                          Created By
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Created At
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {demos.map((demo) => (
                        <tr key={demo.demoId}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {demo.demoId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div>
                              <div className="font-medium">{demo.formInputs.businessName}</div>
                              <div className="text-xs text-gray-400 capitalize">{demo.formInputs.businessType}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {demo.createdBy.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(demo.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              demo.deleted 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {demo.deleted ? 'Deleted' : 'Active'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <a
                                href={`/d/${demo.demoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-900"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                              <button
                                onClick={() => {
                                  if (confirm('Are you sure you want to delete this demo?')) {
                                    // Delete demo logic
                                  }
                                }}
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

          {/* Raw Inputs */}
          {showRawInputs && (
            <div className="mt-6 bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Raw Form Inputs
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Detailed form data for debugging and analysis
                </p>
              </div>
              <div className="border-t border-gray-200">
                <pre className="px-4 py-5 sm:px-6 text-sm text-gray-500 overflow-x-auto">
                  {JSON.stringify(demos, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
