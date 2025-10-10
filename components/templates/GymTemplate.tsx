import { generateColorPalette, getContrastColor } from '../../lib/colorUtils'

export interface TemplateData {
  businessName: string
  businessType: string
  tagline: string
  pages: number
  primaryColor: string
  logoUrl?: string
}

export interface TemplateProps {
  data: TemplateData
}

// Gym Template - Premium Animated Layout
export function GymTemplate({ data }: TemplateProps) {
  const colors = generateColorPalette(data.primaryColor)
  const textColor = getContrastColor(data.primaryColor)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Navigation with Glass Effect */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center group">
              {data.logoUrl && (
                <img src={data.logoUrl} alt="Logo" className="h-12 w-auto mr-4 transition-transform duration-300 group-hover:scale-110" />
              )}
              <span className="text-3xl font-black tracking-tight" style={{ color: colors.primary }}>
                {data.businessName}
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#classes" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Classes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#trainers" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Trainers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#membership" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Membership
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
            </div>
            <button 
              className="px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              style={{ backgroundColor: colors.primary }}
            >
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Hero Section with Animations */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: colors.primary }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10 animate-bounce" style={{ backgroundColor: colors.primary }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full opacity-10 animate-ping" style={{ backgroundColor: colors.primary }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight animate-fade-in-up" style={{ color: colors.primary }}>
                  {data.businessName}
                </h1>
                <p className="text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                  {data.tagline || 'Transform Your Body, Transform Your Life'}
                </p>
              </div>
              
              {/* Premium Stats */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>500+</div>
                  <div className="text-gray-600 text-sm">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>15+</div>
                  <div className="text-gray-600 text-sm">Expert Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>24/7</div>
                  <div className="text-gray-600 text-sm">Gym Access</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
                <button 
                  className="px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                  style={{ 
                    backgroundColor: colors.primary, 
                    color: textColor 
                  }}
                  onClick={() => alert('Starting your free trial!')}
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button className="px-10 py-5 text-xl font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                  Watch Video
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-800">
              <div 
                className="h-[600px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center text-gray-600 text-xl shadow-2xl"
                style={{ backgroundColor: colors.primaryLightest }}
              >
                Premium Gym Interior
              </div>
              
              {/* Floating Elements */}
              <div 
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-bounce"
                style={{ backgroundColor: colors.primary }}
              >
                24/7
              </div>
              <div 
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl animate-pulse"
                style={{ backgroundColor: colors.primaryDark }}
              >
                FREE WiFi
              </div>
              
              {/* Premium Badge */}
              <div 
                className="absolute top-8 left-8 px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg"
                style={{ backgroundColor: colors.primaryDark }}
              >
                ⭐ Premium Facility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold mb-8" style={{ color: colors.primary }}>
                About {data.businessName}
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Since 2015, {data.businessName} has been the premier fitness destination in our community. 
                We're more than just a gym – we're a family of fitness enthusiasts dedicated to helping 
                you achieve your health and wellness goals.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our state-of-the-art facility spans over 15,000 square feet and features the latest 
                equipment, expert trainers, and a supportive community that will motivate you every 
                step of the way.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>15K</div>
                  <div className="text-gray-600">Square Feet</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>500+</div>
                  <div className="text-gray-600">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>50+</div>
                  <div className="text-gray-600">Classes Weekly</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div 
                className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center text-gray-600 text-xl shadow-2xl"
                style={{ backgroundColor: colors.primaryLightest }}
              >
                Gym Facility Photo
              </div>
              <div 
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-float"
                style={{ backgroundColor: colors.primary }}
              >
                Award Winner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section - Card Grid */}
      <section id="classes" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: colors.primary }}>
              Group Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-energy workouts designed to push your limits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'HIIT Blast', 
                time: '6:00 AM', 
                duration: '45 min',
                intensity: 'High',
                instructor: 'Sarah Johnson',
                spots: 12,
                price: '$15',
                description: 'High-intensity interval training to maximize calorie burn'
              },
              { 
                name: 'Yoga Flow', 
                time: '7:30 AM', 
                duration: '60 min',
                intensity: 'Medium',
                instructor: 'Mike Chen',
                spots: 20,
                price: '$12',
                description: 'Mindful movement combining strength and flexibility'
              },
              { 
                name: 'CrossFit', 
                time: '6:00 PM', 
                duration: '50 min',
                intensity: 'High',
                instructor: 'Emily Rodriguez',
                spots: 15,
                price: '$18',
                description: 'Functional fitness training for all levels'
              },
              { 
                name: 'Pilates', 
                time: '9:00 AM', 
                duration: '45 min',
                intensity: 'Low',
                instructor: 'Lisa Wang',
                spots: 18,
                price: '$14',
                description: 'Core strengthening and body awareness'
              },
              { 
                name: 'Spin Class', 
                time: '5:30 PM', 
                duration: '45 min',
                intensity: 'High',
                instructor: 'David Kim',
                spots: 25,
                price: '$16',
                description: 'Cardio cycling with energizing music'
              },
              { 
                name: 'Zumba', 
                time: '7:00 PM', 
                duration: '50 min',
                intensity: 'Medium',
                instructor: 'Maria Garcia',
                spots: 30,
                price: '$13',
                description: 'Dance fitness party workout'
              }
            ].map((classItem, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-scale-in group`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="h-56 flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden"
                  style={{ backgroundColor: colors.primary }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="relative z-10">{classItem.name}</span>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold bg-white/20 backdrop-blur-sm">
                    {classItem.intensity}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold" style={{ color: colors.primaryDarkest }}>
                      {classItem.name}
                    </h3>
                    <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                      {classItem.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <div className="space-y-3 text-gray-600 mb-6">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.primary }}></span>
                      <span className="font-semibold">Time:</span>
                      <span className="ml-2">{classItem.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.primary }}></span>
                      <span className="font-semibold">Duration:</span>
                      <span className="ml-2">{classItem.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.primary }}></span>
                      <span className="font-semibold">Instructor:</span>
                      <span className="ml-2">{classItem.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.primary }}></span>
                      <span className="font-semibold">Spots:</span>
                      <span className="ml-2">{classItem.spots} available</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span 
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: colors.primaryLighter, 
                        color: colors.primaryDarkest 
                      }}
                    >
                      {classItem.intensity} Intensity
                    </span>
                    <button 
                      className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                      style={{ backgroundColor: colors.primary }}
                      onClick={() => alert(`Booking ${classItem.name} at ${classItem.time}`)}
                    >
                      <span className="relative z-10">Book Now</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Calculator - Interactive Section */}
      <section id="membership" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: colors.primary }}>
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">Flexible membership options to fit your lifestyle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Basic',
                price: '$29',
                period: '/month',
                features: ['Gym Access', 'Locker Room', 'Basic Equipment', 'Group Classes (Limited)'],
                popular: false
              },
              {
                name: 'Premium',
                price: '$49',
                period: '/month',
                features: ['Full Gym Access', 'All Group Classes', 'Personal Training (2 sessions)', 'Nutrition Consultation'],
                popular: true
              },
              {
                name: 'Elite',
                price: '$79',
                period: '/month',
                features: ['24/7 Access', 'Unlimited Classes', 'Personal Training (4 sessions)', 'Nutrition Plan', 'Spa Access'],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-offset-2' : ''}`} style={{ borderColor: plan.popular ? colors.primary : 'transparent' }}>
                {plan.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white font-bold text-sm"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold" style={{ color: colors.primary }}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div 
                          className="w-5 h-5 rounded-full mr-3 flex items-center justify-center"
                          style={{ backgroundColor: colors.primaryLighter }}
                        >
                          <span className="text-xs" style={{ color: colors.primaryDarkest }}>✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'text-white' : 'border-2 text-gray-700 hover:bg-gray-50'}`}
                    style={{ 
                      backgroundColor: plan.popular ? colors.primary : 'transparent',
                      borderColor: plan.popular ? 'transparent' : colors.primary
                    }}
                    onClick={() => alert(`Selected ${plan.name} plan for ${plan.price}${plan.period}`)}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.primaryLightest }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: colors.primaryDarkest }}>
              Success Stories
            </h2>
            <p className="text-xl text-gray-700">Hear from our members</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', text: 'Lost 30 pounds and gained incredible confidence. The trainers here are amazing!' },
              { name: 'Mike Chen', text: 'The best gym in town. Clean, modern equipment and friendly staff.' },
              { name: 'Emily Rodriguez', text: 'Transformed my lifestyle completely. Highly recommend to anyone serious about fitness.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-4xl mb-4" style={{ color: colors.primary }}>"</div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">Member since 2023</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Ready to Start?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join {data.businessName} today and begin your transformation journey. 
                Our expert trainers are here to guide you every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3" style={{ backgroundColor: colors.primary }}></div>
                  <span className="text-lg">Free consultation and fitness assessment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3" style={{ backgroundColor: colors.primary }}></div>
                  <span className="text-lg">Flexible membership options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-3" style={{ backgroundColor: colors.primary }}></div>
                  <span className="text-lg">24/7 access to facilities</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-3xl font-bold mb-6">Get Your Free Consultation</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We\'ll contact you within 24 hours.'); }}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Fitness Goals</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Weight Loss</option>
                      <option>Muscle Building</option>
                      <option>General Fitness</option>
                      <option>Athletic Performance</option>
                      <option>Rehabilitation</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 text-lg font-bold text-white rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: colors.primary }}
                >
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ backgroundColor: colors.primaryDarkest }}>
        <div className="max-w-7xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{data.businessName}</h3>
          <p className="text-gray-300 mb-6">Your fitness transformation starts here</p>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Membership</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 {data.businessName}. Demo Website by Regrowth.
          </div>
        </div>
      </footer>
    </div>
  )
}
