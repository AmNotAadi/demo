import { generateColorPalette, getContrastColor } from '../../lib/colorUtils'
import { TemplateData, TemplateProps } from './GymTemplate'

// Salon Template - Spa-Inspired Layout
export function SalonTemplate({ data }: TemplateProps) {
  const colors = generateColorPalette(data.primaryColor)
  const textColor = getContrastColor(data.primaryColor)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Elegant Header */}
      <header className="relative bg-white/90 backdrop-blur-md shadow-lg border-b border-pink-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              {data.logoUrl && (
                <img src={data.logoUrl} alt="Logo" className="h-16 w-auto transition-transform duration-300 hover:scale-110" />
              )}
              <div>
                <h1 className="text-4xl font-bold font-serif" style={{ color: colors.primary }}>
                  {data.businessName}
                </h1>
                <p className="text-pink-600 italic text-lg animate-fade-in-up animation-delay-200">
                  {data.tagline || 'Where Beauty Meets Serenity'}
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 font-semibold transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 font-semibold transition-colors duration-300 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#team" className="text-gray-700 hover:text-pink-600 font-semibold transition-colors duration-300 relative group">
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 font-semibold transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
            </nav>
            
            <button 
              className="px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              style={{ backgroundColor: colors.primary }}
              onClick={() => alert('Booking appointment...')}
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Spa Atmosphere */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold font-serif leading-tight" style={{ color: colors.primary }}>
                  {data.businessName}
                </h1>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  {data.tagline || 'Where Beauty Meets Serenity'}
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Step into our tranquil sanctuary where expert stylists and therapists work their magic. 
                  We're dedicated to enhancing your natural beauty and providing a relaxing escape 
                  from the everyday hustle.
                </p>
              </div>
              
              {/* Salon Stats */}
              <div className="grid grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>500+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>10+</div>
                  <div className="text-gray-600 text-sm">Expert Stylists</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>5★</div>
                  <div className="text-gray-600 text-sm">Customer Rating</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
                <button 
                  className="px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                  style={{ 
                    backgroundColor: colors.primary, 
                    color: textColor 
                  }}
                  onClick={() => alert('Viewing our services...')}
                >
                  <span className="relative z-10">View Services</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button className="px-10 py-5 text-xl font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                  Virtual Consultation
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-800">
              <div 
                className="h-[600px] bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl flex items-center justify-center text-gray-600 text-xl shadow-2xl"
                style={{ backgroundColor: colors.primaryLightest }}
              >
                Luxury Salon Interior
              </div>
              
              {/* Floating Elements */}
              <div 
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-bounce"
                style={{ backgroundColor: colors.primary }}
              >
                ✨
              </div>
              <div 
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl animate-pulse"
                style={{ backgroundColor: colors.primaryDark }}
              >
                Organic Products
              </div>
              
              {/* Premium Badge */}
              <div 
                className="absolute top-8 left-8 px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg"
                style={{ backgroundColor: colors.primaryDark }}
              >
                🌟 Award Winning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Spa Grid */}
      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 font-serif" style={{ color: colors.primary }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive beauty and wellness treatments for your complete transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Hair Styling & Color',
                price: 'From $80',
                description: 'Expert cuts, colors, and styling for any occasion',
                features: ['Cut & Style', 'Color & Highlights', 'Blowouts', 'Special Occasions'],
                duration: '1-3 hours',
                image: '💇‍♀️'
              },
              { 
                name: 'Facials & Skincare',
                price: 'From $120',
                description: 'Rejuvenating treatments for healthy, glowing skin',
                features: ['Deep Cleansing', 'Anti-Aging', 'Hydrating', 'Acne Treatment'],
                duration: '60-90 min',
                image: '🧴'
              },
              { 
                name: 'Manicure & Pedicure',
                price: 'From $45',
                description: 'Professional nail care and beautiful finishes',
                features: ['Classic Manicure', 'Gel Polish', 'Nail Art', 'Spa Pedicure'],
                duration: '45-75 min',
                image: '💅'
              },
              { 
                name: 'Massage Therapy',
                price: 'From $100',
                description: 'Relaxing and therapeutic massage treatments',
                features: ['Swedish Massage', 'Deep Tissue', 'Hot Stone', 'Aromatherapy'],
                duration: '60-90 min',
                image: '💆‍♀️'
              },
              { 
                name: 'Bridal Packages',
                price: 'From $300',
                description: 'Complete beauty packages for your special day',
                features: ['Hair & Makeup', 'Trial Sessions', 'Day-of Service', 'Touch-ups'],
                duration: '3-5 hours',
                image: '👰'
              },
              { 
                name: 'Eyebrow & Lash',
                price: 'From $35',
                description: 'Perfect brows and luscious lashes',
                features: ['Eyebrow Shaping', 'Lash Extensions', 'Tinting', 'Laminating'],
                duration: '30-60 min',
                image: '👁️'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="h-64 flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{ backgroundColor: colors.primaryLightest }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="relative z-10">{service.image}</span>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold bg-white/20 backdrop-blur-sm">
                    {service.price}
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-bold bg-white/20 backdrop-blur-sm">
                    {service.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primaryDarkest }}>
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.primary }}></span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    style={{ backgroundColor: colors.primary }}
                    onClick={() => alert(`Booking ${service.name}...`)}
                  >
                    <span className="relative z-10">Book Service</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 font-serif" style={{ color: colors.primary }}>
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert stylists and therapists dedicated to your beauty and wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Sarah Johnson',
                role: 'Master Stylist',
                experience: '12 years',
                specialties: ['Hair Color', 'Bridal Hair', 'Cut & Style'],
                image: '👩‍🦱'
              },
              { 
                name: 'Emily Rodriguez',
                role: 'Skincare Specialist',
                experience: '8 years',
                specialties: ['Facials', 'Anti-Aging', 'Acne Treatment'],
                image: '👩‍⚕️'
              },
              { 
                name: 'Lisa Wang',
                role: 'Nail Artist',
                experience: '6 years',
                specialties: ['Nail Art', 'Gel Polish', 'Spa Manicures'],
                image: '👩‍🎨'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-scale-in group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div 
                  className="h-80 flex items-center justify-center text-8xl relative overflow-hidden"
                  style={{ backgroundColor: colors.primaryLightest }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="relative z-10">{member.image}</span>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: colors.primaryDarkest }}>
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">{member.experience} experience</p>
                  
                  <div className="space-y-2 mb-6">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.primary }}></span>
                        <span className="text-gray-600 text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    style={{ backgroundColor: colors.primary }}
                    onClick={() => alert(`Booking with ${member.name}...`)}
                  >
                    <span className="relative z-10">Book with {member.name.split(' ')[0]}</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 font-serif" style={{ color: colors.primary }}>
              Book Your Appointment
            </h2>
            <p className="text-xl text-gray-600">Ready to transform your look? We're here to help</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      📍
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Salon Address</p>
                      <p className="text-gray-600">789 Glamour St, Style City, SC 98765</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      📞
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-gray-600">(777) 888-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      📧
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-600">info@{data.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      🕒
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Salon Hours</p>
                      <p className="text-gray-600">Tue-Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sun: 10:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Mon: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-400">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                  Book Appointment
                </h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We\'ll contact you to confirm your appointment.'); }}>
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
                      <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="(777) 888-9999" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>Hair Styling & Color</option>
                        <option>Facials & Skincare</option>
                        <option>Manicure & Pedicure</option>
                        <option>Massage Therapy</option>
                        <option>Bridal Package</option>
                        <option>Eyebrow & Lash</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date</label>
                      <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Time</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>1:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 text-lg font-bold text-white rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <span className="relative z-10">Book Appointment</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif" style={{ color: colors.primary }}>
                {data.businessName}
              </h3>
              <p className="text-gray-300 mb-4">Where beauty meets serenity</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">f</div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">t</div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">i</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Hair Styling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Facials</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Manicures</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Massage</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Team</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Master Stylists</li>
                <li>Skincare Specialists</li>
                <li>Nail Artists</li>
                <li>Massage Therapists</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>789 Glamour St</p>
                <p>Style City, SC 98765</p>
                <p>(777) 888-9999</p>
                <p>info@{data.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 {data.businessName}. Demo Website by Regrowth.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}