import { DemoData } from '@/types/demo'

interface GymTemplateProps {
  demo: DemoData
}

export default function GymTemplate({ demo }: GymTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {demo.businessName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {demo.tagline || 'Transform Your Body, Transform Your Life'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-lg transition-colors"
              style={{ backgroundColor: demo.theme.primaryColor }}
            >
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg text-lg transition-colors">
              View Classes
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demo.pages[0]?.sections?.[1]?.items?.map((service: any, index: number) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: demo.theme.primaryColor }}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Class Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Monday', 'Wednesday', 'Friday'].map((day, index) => (
              <div key={day} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">{day}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Morning Yoga</span>
                    <span className="text-gray-600">6:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">HIIT Training</span>
                    <span className="text-gray-600">7:30 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Strength Training</span>
                    <span className="text-gray-600">6:00 PM</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '$29', features: ['Gym Access', 'Locker Room', 'Basic Equipment'] },
              { name: 'Premium', price: '$49', features: ['All Basic Features', 'Group Classes', 'Personal Trainer'] },
              { name: 'Elite', price: '$79', features: ['All Premium Features', 'Nutrition Counseling', 'Unlimited Classes'] }
            ].map((plan, index) => (
              <div key={plan.name} className={`p-8 rounded-lg shadow-lg ${index === 1 ? 'ring-2 ring-primary-500 transform scale-105' : ''}`}>
                <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    index === 1 
                      ? 'text-white' 
                      : 'border-2 border-gray-300 hover:border-primary-500'
                  }`}
                  style={{ 
                    backgroundColor: index === 1 ? demo.theme.primaryColor : 'transparent',
                    color: index === 1 ? 'white' : 'inherit'
                  }}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">{demo.businessName}</h3>
          <p className="text-gray-400 mb-6">Transform your body, transform your life</p>
          <div className="text-sm text-gray-500">
            Website By Regrowth
          </div>
        </div>
      </footer>
    </div>
  )
}
