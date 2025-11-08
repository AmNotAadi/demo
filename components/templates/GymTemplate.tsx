import { generateColorPalette, getContrastColor } from '../../lib/colorUtils'
import Image from 'next/image'

export interface TemplateData {
  businessName: string
  businessType: string
  tagline: string
  pages: number
  primaryColor: string
  accentColor?: string
  backgroundColor?: string
  backgroundOpacity?: number
  titleFont?: string
  phoneNumber?: string
  address?: string
  logoUrl?: string
  heroImageUrl?: string
  classImage1Url?: string
  classImage2Url?: string
  classImage3Url?: string
  aboutImageUrl?: string
}

export interface TemplateProps {
  data: TemplateData
}

// Gym Template - Premium Animated Layout
export function GymTemplate({ data }: TemplateProps) {
  const colors = generateColorPalette(data.primaryColor)
  const accentColors = generateColorPalette(data.accentColor || data.primaryColor)
  const textColor = getContrastColor(data.primaryColor)
  const titleFontFamily = (() => {
    switch ((data.titleFont || 'sans').toLowerCase()) {
      // Sans Serif
      case 'sans':
        return '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      case 'roboto':
        return '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
      case 'open-sans':
        return '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
      case 'lato':
        return '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
      case 'montserrat':
        return '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
      case 'poppins':
        return '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
      case 'raleway':
        return '"Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
      case 'nunito':
        return '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
      // Serif
      case 'serif':
        return '"Merriweather", Georgia, Cambria, "Times New Roman", Times, serif'
      case 'playfair':
        return '"Playfair Display", Georgia, Cambria, "Times New Roman", Times, serif'
      case 'lora':
        return '"Lora", Georgia, Cambria, "Times New Roman", Times, serif'
      case 'crimson':
        return '"Crimson Text", Georgia, Cambria, "Times New Roman", Times, serif'
      // Display
      case 'display':
        return '"Oswald", Impact, Haettenschweiler, "Franklin Gothic Bold", Arial, sans-serif'
      case 'bebas':
        return '"Bebas Neue", Impact, Haettenschweiler, "Franklin Gothic Bold", Arial, sans-serif'
      case 'anton':
        return '"Anton", Impact, Haettenschweiler, "Franklin Gothic Bold", Arial, sans-serif'
      case 'righteous':
        return '"Righteous", Impact, Haettenschweiler, "Franklin Gothic Bold", Arial, sans-serif'
      // Monospace
      case 'mono':
        return '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      case 'space-mono':
        return '"Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      // Legacy support
      case 'rounded':
        return '"Nunito", system-ui, ui-rounded, "Segoe UI Rounded", "SF Pro Rounded", Arial, sans-serif'
      default:
        return '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }
  })()
  
  const bgColor = data.backgroundColor || '#f9fafb'
  const bgOpacity = (data.backgroundOpacity ?? 100) / 100
  const backgroundStyle = {
    backgroundColor: `${bgColor}${Math.round(bgOpacity * 255).toString(16).padStart(2, '0')}`
  }

  // WhatsApp helper function
  const openWhatsApp = (message: string) => {
    const phoneNumber = data.phoneNumber?.replace(/\D/g, '') || ''
    if (!phoneNumber) {
      alert('Please add a phone number to enable WhatsApp functionality')
      return
    }
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      {/* Premium Navigation with Glass Effect */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center group">
              {data.logoUrl && (
                <Image src={data.logoUrl} alt="Logo" height={48} width={48} unoptimized className="h-12 w-auto mr-4 transition-transform duration-300 group-hover:scale-110" />
              )}
              <span className="text-3xl font-black tracking-tight" style={{ color: colors.primary, fontFamily: titleFontFamily }}>
                {data.businessName}
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
              <a href="#classes" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Classes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
              <a href="#membership" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Membership
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
              <a href="#location" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Location
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
            </div>
            <button 
              onClick={() => openWhatsApp(`Hi! I'm interested in joining ${data.businessName}. Could you please provide more information about membership options?`)}
              className="px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              style={{ backgroundColor: accentColors.primary }}
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
                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight animate-fade-in-up" style={{ color: colors.primary, fontFamily: titleFontFamily }}>
                  {data.businessName}
                </h1>
                <p className="text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                  {data.tagline || 'Transform Your Body, Transform Your Life'}
                </p>
              </div>
              
              {/* Premium Stats */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>💪</div>
                  <div className="text-gray-600 text-sm">Active Community</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>🎯</div>
                  <div className="text-gray-600 text-sm">Expert Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>⏰</div>
                  <div className="text-gray-600 text-sm">Flexible Hours</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
                <button 
                  className="px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group flex items-center justify-center gap-3"
                  style={{ 
                    backgroundColor: '#25D366',
                    color: 'white'
                  }}
                  onClick={() => {
                    const phoneNumber = data.phoneNumber?.replace(/\D/g, '') || ''
                    const message = encodeURIComponent('Hello! I am interested in your Gym!')
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="relative z-10">Chat Now</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button 
                  className="px-10 py-5 text-xl font-bold border-2 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  style={{ 
                    backgroundColor: accentColors.primary,
                    borderColor: accentColors.primary
                  }}
                  onClick={() => {
                    const locationSection = document.getElementById('location')
                    if (locationSection) {
                      locationSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  View Location
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-800">
              {data.heroImageUrl ? (
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src={data.heroImageUrl} alt="Hero" fill unoptimized className="object-cover" />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"> 
                    {data.tagline || 'Premium Gym Interior'}
                  </div>
                </div>
              ) : (
                <div 
                  className="h-[600px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center text-gray-600 text-xl shadow-2xl"
                  style={{ backgroundColor: colors.primaryLightest }}
                >
                  Premium Gym Interior
                </div>
              )}
              
              {/* Premium Badge */}
              <div 
                className="absolute top-8 left-8 px-8 py-4 rounded-2xl backdrop-blur-md text-white font-semibold text-sm shadow-2xl border border-white/20"
                style={{ 
                  backgroundColor: `${accentColors.primary}95`,
                  boxShadow: `0 8px 32px ${accentColors.primary}40`
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <span>Premium Facility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <section className="py-20 px-4 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: colors.primary }}>
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600">Real transformations, real results</p>
          </div>
          
          <div className="relative">
            <div className="flex animate-infinite-scroll gap-6">
              {[
                {
                  name: 'Rajesh K.',
                  role: 'Member',
                  rating: 5,
                  text: 'Absolutely love this gym! The trainers are incredibly professional and the equipment is always well-maintained. I\'ve seen amazing results in just a few months. The supportive community makes every workout enjoyable.',
                  achievement: 'Lost 15kg in 6 months'
                },
                {
                  name: 'Priya S.',
                  role: 'Member',
                  rating: 5,
                  text: 'The variety of classes keeps me motivated and excited about working out. The instructors are knowledgeable and always ensure proper form. Clean facilities and friendly staff make this my second home!',
                  achievement: 'Gained muscle strength'
                },
                {
                  name: 'Amit P.',
                  role: 'Member',
                  rating: 5,
                  text: 'Best decision I made for my health! The personal training sessions are tailored perfectly to my goals. The atmosphere is encouraging and non-intimidating. Highly recommend to anyone serious about fitness.',
                  achievement: 'Achieved fitness goals'
                },
                {
                  name: 'Sneha R.',
                  role: 'Member',
                  rating: 5,
                  text: 'I\'ve been a member for over a year and couldn\'t be happier. The yoga and aerobics classes are fantastic. The trainers genuinely care about your progress and push you to be your best self.',
                  achievement: 'Improved flexibility'
                },
                {
                  name: 'Vikram S.',
                  role: 'Member',
                  rating: 5,
                  text: 'Top-notch facilities with state-of-the-art equipment. Very clean and well-maintained. The staff is professional and always ready to help. Great value for the quality of service provided.',
                  achievement: 'Enhanced endurance'
                },
                {
                  name: 'Anjali M.',
                  role: 'Member',
                  rating: 5,
                  text: 'The personalized attention and expert guidance have transformed my fitness journey. The nutrition consultation was extremely helpful. This gym truly cares about member success and wellbeing.',
                  achievement: 'Complete lifestyle change'
                },
                {
                  name: 'Karan T.',
                  role: 'Member',
                  rating: 5,
                  text: 'Outstanding gym experience! The equipment is modern and the trainers are genuinely invested in your success. I\'ve made incredible progress with their structured programs and constant motivation.',
                  achievement: 'Built lean muscle'
                },
                {
                  name: 'Neha G.',
                  role: 'Member',
                  rating: 5,
                  text: 'This gym has exceeded all my expectations. The group classes are energizing and the personal training is worth every penny. The positive environment keeps me coming back every single day.',
                  achievement: 'Improved stamina'
                },
                {
                  name: 'Rohit V.',
                  role: 'Member',
                  rating: 5,
                  text: 'Fantastic gym with excellent amenities! The trainers are experienced and really know how to push you safely. Clean, spacious, and has everything you need for a complete workout.',
                  achievement: 'Transformed physique'
                },
                {
                  name: 'Kavya N.',
                  role: 'Member',
                  rating: 5,
                  text: 'Joined six months ago and it\'s been life-changing. The supportive community and expert guidance helped me achieve goals I thought were impossible. Couldn\'t ask for a better fitness home!',
                  achievement: 'Increased confidence'
                },
                {
                  name: 'Arjun D.',
                  role: 'Member',
                  rating: 5,
                  text: 'Best gym I\'ve ever been to! The trainers create personalized plans that actually work. The facility is always spotless and the equipment is top-quality. Highly recommended for serious fitness enthusiasts.',
                  achievement: 'Lost 20kg'
                },
                {
                  name: 'Divya B.',
                  role: 'Member',
                  rating: 5,
                  text: 'The dedication of the staff is remarkable. They remember your name, track your progress, and celebrate your wins. The variety of classes and flexible timing make it perfect for any schedule.',
                  achievement: 'Gained strength'
                },
                {
                  name: 'Sanjay L.',
                  role: 'Member',
                  rating: 5,
                  text: 'Incredible transformation since joining! The trainers are knowledgeable, patient, and push you to reach your potential. The gym culture is welcoming and motivating. Worth every moment spent here.',
                  achievement: 'Marathon ready'
                },
                {
                  name: 'Meera J.',
                  role: 'Member',
                  rating: 5,
                  text: 'This place has changed my relationship with fitness. The instructors are inspiring and the community is like family. Every session is enjoyable and effective. I look forward to my workouts now!',
                  achievement: 'Lifestyle transformation'
                },
                {
                  name: 'Aditya R.',
                  role: 'Member',
                  rating: 5,
                  text: 'Professional, clean, and motivating environment. The trainers are certified experts who design programs that deliver results. The investment in this membership has paid off tremendously for my health.',
                  achievement: 'Better health metrics'
                },
                {
                  name: 'Pooja K.',
                  role: 'Member',
                  rating: 5,
                  text: 'Amazing experience from day one! The staff is friendly, facilities are pristine, and the workout programs are challenging yet achievable. This gym has helped me become the best version of myself.',
                  achievement: 'Reached target weight'
                },
                {
                  name: 'Rajesh K.',
                  role: 'Member',
                  rating: 5,
                  text: 'Absolutely love this gym! The trainers are incredibly professional and the equipment is always well-maintained. I\'ve seen amazing results in just a few months. The supportive community makes every workout enjoyable.',
                  achievement: 'Lost 15kg in 6 months'
                },
                {
                  name: 'Priya S.',
                  role: 'Member',
                  rating: 5,
                  text: 'The variety of classes keeps me motivated and excited about working out. The instructors are knowledgeable and always ensure proper form. Clean facilities and friendly staff make this my second home!',
                  achievement: 'Gained muscle strength'
                },
                {
                  name: 'Amit P.',
                  role: 'Member',
                  rating: 5,
                  text: 'Best decision I made for my health! The personal training sessions are tailored perfectly to my goals. The atmosphere is encouraging and non-intimidating. Highly recommend to anyone serious about fitness.',
                  achievement: 'Achieved fitness goals'
                },
                {
                  name: 'Sneha R.',
                  role: 'Member',
                  rating: 5,
                  text: 'I\'ve been a member for over a year and couldn\'t be happier. The yoga and aerobics classes are fantastic. The trainers genuinely care about your progress and push you to be your best self.',
                  achievement: 'Improved flexibility'
                },
                {
                  name: 'Vikram S.',
                  role: 'Member',
                  rating: 5,
                  text: 'Top-notch facilities with state-of-the-art equipment. Very clean and well-maintained. The staff is professional and always ready to help. Great value for the quality of service provided.',
                  achievement: 'Enhanced endurance'
                },
                {
                  name: 'Anjali M.',
                  role: 'Member',
                  rating: 5,
                  text: 'The personalized attention and expert guidance have transformed my fitness journey. The nutrition consultation was extremely helpful. This gym truly cares about member success and wellbeing.',
                  achievement: 'Complete lifestyle change'
                },
                {
                  name: 'Karan T.',
                  role: 'Member',
                  rating: 5,
                  text: 'Outstanding gym experience! The equipment is modern and the trainers are genuinely invested in your success. I\'ve made incredible progress with their structured programs and constant motivation.',
                  achievement: 'Built lean muscle'
                },
                {
                  name: 'Neha G.',
                  role: 'Member',
                  rating: 5,
                  text: 'This gym has exceeded all my expectations. The group classes are energizing and the personal training is worth every penny. The positive environment keeps me coming back every single day.',
                  achievement: 'Improved stamina'
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="relative flex-shrink-0 w-[280px] h-[400px] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  {/* Top Accent Bar */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: colors.primary }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mr-3"
                        style={{ 
                          backgroundColor: colors.primary,
                          boxShadow: `0 4px 16px ${colors.primary}40`
                        }}
                      >
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                        <p className="text-xs font-medium text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-4 gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" style={{ color: '#FFD700' }} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Review Text with Quote Marks */}
                    <div className="flex-grow mb-4 relative">
                      <div 
                        className="absolute -left-1 -top-2 text-5xl font-serif leading-none opacity-15"
                        style={{ color: colors.primary }}
                      >
                        "
                      </div>
                      <div 
                        className="absolute -right-1 -bottom-2 text-5xl font-serif leading-none opacity-15"
                        style={{ color: colors.primary }}
                      >
                        "
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm px-4 relative z-10">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    {/* Achievement Badge */}
                    <div 
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white text-center"
                      style={{ 
                        backgroundColor: accentColors.primary,
                        boxShadow: `0 4px 12px ${accentColors.primary}30`
                      }}
                    >
                      ✓ {testimonial.achievement}
                    </div>
                  </div>
                </div>
              ))}
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
                name: 'HIIT Training', 
                intensity: 'High',
                description: 'High-intensity interval training for maximum results',
                imageUrl: data.classImage1Url
              },
              { 
                name: 'Yoga & Flexibility', 
                intensity: 'Medium',
                description: 'Mindful movement and stress relief',
                imageUrl: data.classImage2Url
              },
              { 
                name: 'Strength Training', 
                intensity: 'High',
                description: 'Build muscle and increase power for a longer life',
                imageUrl: data.classImage3Url
              }
            ].map((classItem, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                {classItem.imageUrl ? (
                  <div className="h-56 relative overflow-hidden">
                    <Image 
                      src={classItem.imageUrl} 
                      alt={classItem.name} 
                      fill 
                      unoptimized 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">{classItem.name}</span>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm" style={{ color: colors.primary }}>
                      {classItem.intensity}
                    </div>
                  </div>
                ) : (
                  <div 
                    className="h-56 flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transition-opacity duration-300 group-hover:opacity-50"></div>
                    <span className="relative z-10">{classItem.name}</span>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold bg-white/20 backdrop-blur-sm">
                      {classItem.intensity}
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primaryDarkest }}>
                    {classItem.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <button 
                    className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02] shadow-md hover:shadow-lg relative overflow-hidden"
                    style={{ backgroundColor: accentColors.primary }}
                    onClick={() => openWhatsApp(`Hi! I'm interested in learning more about ${classItem.name} at ${data.businessName}.`)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section - Simplified */}
      <section id="membership" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: colors.primary }}>
              Membership Options
            </h2>
            <p className="text-xl text-gray-600">Flexible plans to fit your fitness journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Basic',
                features: ['Gym Access', 'Locker Room', 'Basic Equipment', 'Group Classes']
              },
              {
                name: 'Premium',
                features: ['Full Gym Access', 'All Group Classes', 'Personal Training Sessions', 'Nutrition Guidance'],
                popular: true
              },
              {
                name: 'Elite',
                features: ['Extended Access', 'Premium Training', 'Wellness Programs', 'Priority Booking']
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
                  <h3 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
                    {plan.name}
                  </h3>
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
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'text-white' : 'border-2 text-white'}`}
                    style={{ 
                      backgroundColor: plan.popular ? colors.primary : accentColors.primary,
                      borderColor: plan.popular ? 'transparent' : accentColors.primary
                    }}
                    onClick={() => openWhatsApp(`Hi! I'm interested in learning more about the ${plan.name} membership plan at ${data.businessName}.`)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.primaryLightest }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold mb-8" style={{ color: colors.primary }}>
                About {data.businessName}
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                {data.businessName} is your premier fitness destination. 
                We're more than just a gym – we're a community of fitness enthusiasts dedicated to helping 
                you achieve your health and wellness goals.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our modern facility features quality equipment, experienced trainers, and a supportive 
                environment that will motivate you every step of the way.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="px-6 py-4 rounded-xl text-center font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: accentColors.primary }}
                >
                  Professional Staff
                </div>
                <div 
                  className="px-6 py-4 rounded-xl text-center font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: colors.primary }}
                >
                  Modern Equipment
                </div>
                <div 
                  className="px-6 py-4 rounded-xl text-center font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: colors.primary }}
                >
                  Group Classes
                </div>
                <div 
                  className="px-6 py-4 rounded-xl text-center font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: accentColors.primary }}
                >
                  Personal Training
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              {data.aboutImageUrl ? (
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src={data.aboutImageUrl} 
                    alt="About our gym" 
                    fill 
                    unoptimized 
                    className="object-cover" 
                  />
                  <div 
                    className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-float"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Join Us
                  </div>
                </div>
              ) : (
                <>
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
                    Join Us
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6" style={{ color: colors.primary }}>Find Us</h2>
            <p className="text-xl text-gray-300">
              Visit {data.businessName} and start your fitness journey today
            </p>
          </div>
          
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {data.address ? (
              <iframe
                src={(() => {
                  const addr = data.address.trim()
                  
                  // If it's an iframe embed code, extract the src URL
                  if (addr.includes('<iframe') && addr.includes('src=')) {
                    const srcMatch = addr.match(/src=["']([^"']+)["']/)
                    if (srcMatch) return srcMatch[1]
                  }
                  
                  // If it's already a google.com/maps/embed URL
                  if (addr.includes('google.com/maps/embed')) {
                    return addr
                  }
                  
                  // Otherwise treat it as a plain address and use standard embed
                  return `https://maps.google.com/maps?q=${encodeURIComponent(addr)}&output=embed`
                })()}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-xl text-gray-400">Add your address to show location map</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ backgroundColor: colors.primaryDarkest }}>
        <div className="max-w-7xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{data.businessName}</h3>
          <p className="text-gray-300 mb-6">Your fitness transformation starts here</p>
          <div className="text-sm text-gray-400">
            © 2025 {data.businessName}. Made With ❤️ by <a href="https://www.regrowth.site" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Regrowth</a>.
          </div>
        </div>
      </footer>

      {/* CSS for animations - optimized for performance */}
      <style jsx>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-286px * 12));
          }
        }
        
        .animate-infinite-scroll {
          animation: infiniteScroll 60s linear infinite;
          will-change: transform;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Optimize all animations to prevent flickering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        [class*="animate-"] {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        /* Prevent animation restart on re-render */
        .animate-pulse,
        .animate-bounce,
        .animate-ping,
        .animate-fade-in-up,
        .animate-slide-in-left,
        .animate-slide-in-right,
        .animate-scale-in,
        .animate-float {
          animation-fill-mode: both;
        }
        
        /* Enable smooth hover animations */
        button,
        a,
        .group {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
        
        /* Ensure transforms work on hover */
        .hover\:scale-\[1\.02\]:hover {
          transform: scale(1.02) !important;
        }
        
        .hover\:brightness-110:hover {
          filter: brightness(1.1) !important;
        }
        
        .hover\:-translate-y-2:hover {
          transform: translateY(-0.5rem) !important;
        }
        
        .hover\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }
        
        .group:hover .group-hover\:scale-110 {
          transform: scale(1.1) !important;
        }
      `}</style>
    </div>
  )
}
