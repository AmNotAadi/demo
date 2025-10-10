import { DemoData } from '@/types/demo'

interface CafeTemplateProps {
  demo: DemoData
}

export default function CafeTemplate({ demo }: CafeTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            {demo.businessName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600">
            {demo.tagline || 'Coffee & Community'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-lg transition-colors"
              style={{ backgroundColor: demo.theme.primaryColor }}
            >
              Order Online
            </button>
            <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-lg text-lg transition-colors">
              Visit Us
            </button>
          </div>
        </div>
      </section>

      {/* Coffee Menu */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Coffee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Espresso', price: '$3.50', description: 'Rich and bold' },
              { name: 'Cappuccino', price: '$4.25', description: 'Perfectly balanced' },
              { name: 'Latte', price: '$4.75', description: 'Smooth and creamy' },
              { name: 'Americano', price: '$3.75', description: 'Clean and simple' },
              { name: 'Mocha', price: '$5.25', description: 'Chocolate indulgence' },
              { name: 'Macchiato', price: '$4.50', description: 'Espresso with foam' },
              { name: 'Cold Brew', price: '$4.00', description: 'Smooth and refreshing' },
              { name: 'Frappé', price: '$5.75', description: 'Blended perfection' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: demo.theme.primaryColor }}
                >
                  ☕
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <span className="text-lg font-bold text-primary-600">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Fresh Pastries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Croissant', price: '$3.25', description: 'Buttery and flaky' },
              { name: 'Danish', price: '$3.75', description: 'Sweet and fruity' },
              { name: 'Muffin', price: '$2.95', description: 'Fresh baked daily' },
              { name: 'Scone', price: '$3.50', description: 'Traditional recipe' },
              { name: 'Bagel', price: '$2.75', description: 'New York style' },
              { name: 'Cinnamon Roll', price: '$4.25', description: 'Warm and gooey' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-bold text-primary-600">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">123 Main Street<br />Your City, ST 12345</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">hello@{demo.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Hours</h2>
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '6:00 AM - 8:00 PM' },
                  { day: 'Saturday', hours: '7:00 AM - 9:00 PM' },
                  { day: 'Sunday', hours: '8:00 AM - 6:00 PM' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Workspace */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Perfect for Remote Work</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Free WiFi, comfortable seating, and great coffee make our cafe the perfect 
            place to work remotely. We have power outlets at every table and a quiet 
            atmosphere for productivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📶</div>
              <h3 className="text-xl font-semibold mb-2">Free WiFi</h3>
              <p className="text-gray-600">High-speed internet for all guests</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-2">Power Outlets</h3>
              <p className="text-gray-600">Charging stations at every table</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-semibold mb-2">Bottomless Coffee</h3>
              <p className="text-gray-600">Unlimited refills while you work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">{demo.businessName}</h3>
          <p className="text-gray-400 mb-6">Coffee & Community</p>
          <div className="text-sm text-gray-500">
            Demo Website By Regrowth
          </div>
        </div>
      </footer>
    </div>
  )
}
