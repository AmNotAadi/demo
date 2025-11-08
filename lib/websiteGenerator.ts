import { Demo } from './firebaseStorage'

export function generateStandaloneHTML(demo: Demo): string {
  const primaryColor = demo.primaryColor
  const accentColor = demo.accentColor || demo.primaryColor
  const backgroundColor = demo.backgroundColor || '#ffffff'
  const titleFont = demo.titleFont || 'sans'
  
  const fontFamily = getFontFamily(titleFont)
  const fontImport = getFontImport(titleFont)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${demo.businessName} - ${demo.businessType}</title>
  <meta name="description" content="${demo.tagline || `Professional ${demo.businessType} - ${demo.businessName}`}">
  ${fontImport}
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: ${fontFamily};
      line-height: 1.6;
      color: #333;
      background-color: ${backgroundColor};
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Navigation */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      z-index: 1000;
      padding: 1rem 0;
    }
    
    nav .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    nav h1 {
      font-size: 1.8rem;
      font-weight: 900;
      color: ${primaryColor};
    }
    
    nav ul {
      display: flex;
      list-style: none;
      gap: 2rem;
    }
    
    nav a {
      text-decoration: none;
      color: #555;
      font-weight: 600;
      transition: color 0.3s;
    }
    
    nav a:hover {
      color: ${primaryColor};
    }
    
    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 80px;
      background: linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%);
    }
    
    .hero-content {
      text-align: center;
      padding: 4rem 0;
    }
    
    .hero h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: ${primaryColor};
    }
    
    .hero p {
      font-size: 1.5rem;
      color: #666;
      margin-bottom: 2rem;
    }
    
    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      background: ${accentColor};
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
    
    /* Sections */
    section {
      padding: 4rem 0;
    }
    
    section h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: ${primaryColor};
    }
    
    /* Grid */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .card h3 {
      color: ${primaryColor};
      margin-bottom: 1rem;
    }
    
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    
    /* Footer */
    footer {
      background: #1a1a1a;
      color: white;
      text-align: center;
      padding: 3rem 0;
      margin-top: 4rem;
    }
    
    footer p {
      color: #888;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      nav ul {
        display: none;
      }
      
      .hero h2 {
        font-size: 2rem;
      }
      
      .hero p {
        font-size: 1.2rem;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav>
    <div class="container">
      <h1>${demo.businessName}</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <h2>${demo.businessName}</h2>
        <p>${demo.tagline || `Welcome to ${demo.businessName}`}</p>
        <a href="#contact" class="btn">Get Started</a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <div class="container">
      <h2>About Us</h2>
      <p style="text-align: center; max-width: 800px; margin: 0 auto;">
        We are dedicated to providing the best ${demo.businessType} experience for our customers.
        ${demo.tagline ? demo.tagline : ''}
      </p>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="grid">
        <div class="card">
          <h3>Service 1</h3>
          <p>Premium quality service tailored to your needs.</p>
        </div>
        <div class="card">
          <h3>Service 2</h3>
          <p>Professional expertise with attention to detail.</p>
        </div>
        <div class="card">
          <h3>Service 3</h3>
          <p>Exceptional results that exceed expectations.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p style="text-align: center;">
        ${demo.phoneNumber ? `Phone: ${demo.phoneNumber}<br>` : ''}
        ${demo.address ? `Address: ${demo.address}` : ''}
      </p>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <h3>${demo.businessName}</h3>
      <p>© ${new Date().getFullYear()} ${demo.businessName}. Website by Regrowth.</p>
    </div>
  </footer>

  <script>
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  </script>
</body>
</html>`
}

function getFontFamily(font: string): string {
  switch (font.toLowerCase()) {
    case 'roboto':
      return '"Roboto", sans-serif'
    case 'open-sans':
      return '"Open Sans", sans-serif'
    case 'lato':
      return '"Lato", sans-serif'
    case 'montserrat':
      return '"Montserrat", sans-serif'
    case 'poppins':
      return '"Poppins", sans-serif'
    case 'raleway':
      return '"Raleway", sans-serif'
    case 'nunito':
      return '"Nunito", sans-serif'
    case 'serif':
    case 'merriweather':
      return '"Merriweather", serif'
    case 'playfair':
      return '"Playfair Display", serif'
    case 'lora':
      return '"Lora", serif'
    case 'crimson':
      return '"Crimson Text", serif'
    case 'display':
    case 'oswald':
      return '"Oswald", sans-serif'
    case 'bebas':
      return '"Bebas Neue", sans-serif'
    case 'anton':
      return '"Anton", sans-serif'
    case 'righteous':
      return '"Righteous", sans-serif'
    case 'mono':
    case 'fira-code':
      return '"Fira Code", monospace'
    case 'space-mono':
      return '"Space Mono", monospace'
    default:
      return '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  }
}

function getFontImport(font: string): string {
  const fonts = [
    'Roboto:400,500,600,700',
    'Open+Sans:400,600,700',
    'Lato:400,700',
    'Montserrat:400,600,700',
    'Poppins:400,600,700',
    'Raleway:400,600,700',
    'Nunito:400,600,700',
    'Merriweather:400,700',
    'Playfair+Display:400,700',
    'Lora:400,700',
    'Crimson+Text:400,700',
    'Oswald:400,600,700',
    'Bebas+Neue:400',
    'Anton:400',
    'Righteous:400',
    'Fira+Code:400,600',
    'Space+Mono:400,700'
  ]
  
  return `<link href="https://fonts.googleapis.com/css2?${fonts.join('&family=')}&display=swap" rel="stylesheet">`
}
