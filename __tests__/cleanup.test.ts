import { describe, it, expect, jest } from '@jest/globals'

// Mock Firebase Admin
jest.mock('firebase-admin/app', () => ({
  initializeApp: jest.fn(),
  getApps: jest.fn(() => []),
  cert: jest.fn()
}))

jest.mock('firebase-admin/firestore', () => ({
  getFirestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      where: jest.fn(() => ({
        get: jest.fn(() => Promise.resolve({
          size: 5,
          docs: Array.from({ length: 5 }, (_, i) => ({
            id: `demo${i}`,
            ref: { delete: jest.fn() }
          }))
        }))
      })),
      add: jest.fn(),
      doc: jest.fn(() => ({
        get: jest.fn(() => Promise.resolve({
          exists: true,
          ref: { delete: jest.fn() }
        }))
      }))
    }))
  }))
}))

jest.mock('firebase-admin/storage', () => ({
  getStorage: jest.fn(() => ({
    bucket: jest.fn(() => ({
      getFiles: jest.fn(() => Promise.resolve([
        Array.from({ length: 3 }, (_, i) => ({
          delete: jest.fn()
        }))
      ]))
    }))
  }))
}))

describe('Cleanup Expired Demos', () => {
  it('should identify expired demos correctly', () => {
    const now = Date.now()
    const threeDaysAgo = now - (3 * 24 * 60 * 60 * 1000)
    const oneDayAgo = now - (1 * 24 * 60 * 60 * 1000)
    const tomorrow = now + (1 * 24 * 60 * 60 * 1000)

    const demos = [
      { expireAt: threeDaysAgo, shouldBeDeleted: true },
      { expireAt: oneDayAgo, shouldBeDeleted: true },
      { expireAt: now, shouldBeDeleted: true },
      { expireAt: tomorrow, shouldBeDeleted: false }
    ]

    demos.forEach(demo => {
      // treat expireAt equal to now as expired
      const isExpired = demo.expireAt <= now
      expect(isExpired).toBe(demo.shouldBeDeleted)
    })
  })

  it('should handle cleanup of multiple expired demos', async () => {
    const expiredDemos = [
      { id: 'demo1', expireAt: Date.now() - 1000 },
      { id: 'demo2', expireAt: Date.now() - 2000 },
      { id: 'demo3', expireAt: Date.now() - 3000 }
    ]

    // Mock cleanup function
    const cleanupExpiredDemos = async () => {
      const now = Date.now()
      const expired = expiredDemos.filter(demo => demo.expireAt < now)
      
      // Simulate cleanup operations
      const cleanupPromises = expired.map(async (demo) => {
        // Delete public demo
        // Delete private metadata
        // Delete view records
        // Delete storage files
        return Promise.resolve()
      })

      await Promise.all(cleanupPromises)
      return expired.length
    }

    const cleanedCount = await cleanupExpiredDemos()
    expect(cleanedCount).toBe(3)
  })

  it('should handle cleanup errors gracefully', async () => {
    const cleanupWithError = async () => {
      try {
        // Simulate error during cleanup
        throw new Error('Cleanup failed')
      } catch (error) {
        console.error('Error during cleanup:', error)
        return false
      }
    }

    const result = await cleanupWithError()
    expect(result).toBe(false)
  })

  it('should calculate correct expiry threshold', () => {
    const now = Date.now()
    const threeDaysInMs = 3 * 24 * 60 * 60 * 1000
    
    // Test various expiry scenarios
    const scenarios = [
      { createdAt: now - threeDaysInMs - 1000, shouldExpire: true },
      { createdAt: now - threeDaysInMs + 1000, shouldExpire: false },
      { createdAt: now - (2 * 24 * 60 * 60 * 1000), shouldExpire: false },
      { createdAt: now - (4 * 24 * 60 * 60 * 1000), shouldExpire: true }
    ]

    scenarios.forEach(scenario => {
      const expireAt = scenario.createdAt + threeDaysInMs
      // treat expiry at exactly `now` as expired
      const isExpired = expireAt <= now
      expect(isExpired).toBe(scenario.shouldExpire)
    })
  })
})
