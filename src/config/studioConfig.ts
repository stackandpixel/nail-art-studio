/**
 * Centralized Configuration for Blush & Bloom Nail Studio & Academy
 * Built as a sales demo by Stack & Pixel (https://stackandpixel.dev)
 * 
 * Prospective studio owners can easily customize this single file to update
 * all salon details, pricing, services, academy syllabi, and contact links.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'extensions' | 'gel-art' | 'manicures' | 'bridal-festive' | 'care';
  priceINR: number;
  priceNote?: string;
  duration: string;
  description: string;
  bestFor: string;
  features: string[];
  popular?: boolean;
  visualTheme: string;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  priceINR: number;
  originalPriceINR?: number;
  duration: string;
  includes: string[];
  recommendedFor: string;
  isBestseller?: boolean;
}

export interface CourseItem {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Professional' | 'Masterclass';
  feeINR: number;
  feeNote?: string;
  duration: string;
  schedule: string;
  modules: string[];
  kitIncluded: boolean;
  kitDetails: string[];
  certification: string;
  handsOnHours: string;
  summary: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'minimal' | 'chrome' | 'french' | 'festive' | 'creative';
  technique: string;
  caption: string;
  tags: string[];
  colors: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  occasion: string;
  quote: string;
  serviceTaken: string;
  rating: number;
  date: string;
  isDemoNote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'appointments' | 'care' | 'academy' | 'bridal';
}

export const studioConfig = {
  // Brand Identity
  brand: {
    name: 'Blush & Bloom Nail Studio & Academy',
    shortName: 'Blush & Bloom',
    tagline: 'Your Nails. Your Canvas. Your Signature.',
    heroHeadline: 'Beautiful Nails. Bold Confidence.',
    heroSubtitle:
      'Discover your perfect nail look or begin your journey towards becoming a certified professional nail artist with Blush & Bloom Nail Studio & Academy in Baner, Pune.',
    storyHeadline: 'Where Precision Chemistry Meets High-Fashion Nail Art',
    philosophy:
      'At Blush & Bloom, we believe nail design is wearable haute couture. Every manicure begins with rigorous Russian-technique cuticle wellness, medical-grade ultrasonic tool sterilization, and cruelty-free European gel polymers designed to protect natural nail vitality.',
    directorPersona: {
      name: 'Ananya Sen (Demo Persona)',
      title: 'Founder & Lead Nail Educator',
      credentials: 'Couture Gel Sculptor & Certified Master Educator',
      quote:
        '“Indian women deserve nail art that can transition seamlessly from boardrooms to sangeet celebrations without chipping or causing nail bed stress.”',
    },
  },

  // Stack & Pixel Demo Meta
  demoNotice: {
    agencyName: 'Stack & Pixel',
    message:
      'Demo Project: Fictional sample data shown for sales demonstration. Ready to be customized for your beauty studio.',
    ctaText: 'Customise This Website For Your Studio',
    agencyUrl: 'https://stackandpixel.dev',
  },

  // Contact & Location
  contact: {
    phone: '+91 98765 43210',
    whatsappNumber: '919876543210', // Plain digits with 91 country code for wa.me links
    email: 'hello@blushandbloom.demo',
    address: 'Plot 42, 2nd Floor, Imperial Luxe Plaza, Near Balewadi High Street, Baner, Pune 411045, Maharashtra, India',
    city: 'Pune',
    area: 'Baner',
    landmark: 'Opposite Westend Bay, Baner Main Road',
    openingHours: {
      weekdays: 'Monday – Saturday: 10:00 AM – 8:00 PM',
      sunday: 'Sunday: 11:00 AM – 6:00 PM (Prior Appointment Only)',
    },
    instagramHandle: '@blushandbloom.studio.demo',
    instagramUrl: 'https://instagram.com',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261895315809!2d73.784578!3d18.562725!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x3bc2bf3600000001%3A0x8978189679f22550!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Baner+Pune+Nail+Studio+India',
  },

  // Formspree / Web3Forms Form Delivery Configuration
  forms: {
    // Set your Formspree form ID or Web3Forms access key here
    formspreeEndpoint: '', // e.g. 'https://formspree.io/f/mqkvpzye' (Leave empty for intelligent demo simulator)
    deliveryProvider: 'Formspree / Web3Forms (Configurable)',
    notificationEmail: 'bookings@blushandbloom.demo',
  },

  // Services Catalog
  services: [
    {
      id: 'classic-manicure',
      name: 'Classic Spa Manicure',
      category: 'manicures',
      priceINR: 499,
      duration: '45 mins',
      description: 'Gentle cuticle care, hydrating rosehip soak, therapeutic hand massage, and high-shine organic buff or clear protective shield.',
      bestFor: 'Routine nail health, natural polish lovers, and corporate elegance',
      features: ['Organic Rosehip Soak', 'Gentle Cuticle Detailing', 'Aromatherapy Hand Massage', 'Diamond Buff Finish'],
      visualTheme: 'rose-nude',
    },
    {
      id: 'gel-polish',
      name: 'Long-Wear Gel Polish',
      category: 'gel-art',
      priceINR: 799,
      duration: '60 mins',
      description: 'Flawless zero-chip gel polish cured under cold LED lamps. High-gloss mirror reflection lasting 21+ days without peeling.',
      bestFor: 'Everyday elegance and active lifestyles',
      features: ['Dry Russian Prep', '120+ International Gel Shades', 'Non-Yellowing Top Coat', '3-Week Chip Guarantee'],
      popular: true,
      visualTheme: 'warm-ivory',
    },
    {
      id: 'builder-gel-biab',
      name: 'Builder Gel Overlay (BIAB)',
      category: 'extensions',
      priceINR: 1299,
      duration: '75 mins',
      description: 'Strengthening structured builder gel overlay on your natural nails to prevent breakage, encourage healthy growth, and give a sculpted curve.',
      bestFor: 'Brittle nails, nail biters, and long-term natural growth',
      features: ['Apex Reinforcement', 'Flexible Self-Leveling Resin', 'Gentle Soak-Off Compatibility', 'Natural Nude Base Options'],
      visualTheme: 'nude-beige',
    },
    {
      id: 'gel-extensions',
      name: 'Sculpted Gel Nail Extensions',
      category: 'extensions',
      priceINR: 1499,
      duration: '90 mins',
      description: 'Full-set lightweight soft-gel or hard-gel extensions custom sculpted to your natural finger anatomy. Choose almond, coffin, stiletto, or square.',
      bestFor: 'Dramatic length, parties, festive events, and flawless silhouettes',
      features: ['Custom Tip or Paper Form Tailoring', 'Featherlight Weight', 'No Harmful Odors', 'Custom Shape Customization'],
      popular: true,
      visualTheme: 'blush-pink',
    },
    {
      id: 'acrylic-extensions',
      name: 'High-Durability Acrylic Extensions',
      category: 'extensions',
      priceINR: 1699,
      duration: '100 mins',
      description: 'Ultra-resilient polymer sculpting offering maximum strength and longevity for extended lengths and active hand usage.',
      bestFor: 'Maximum strength, long stiletto lengths, and intense durability',
      features: ['High-Strength Acrylic Monomer', 'Crisp Edge Definition', 'Fade-Proof Pigments', 'Custom Length Gradients'],
      visualTheme: 'rose-gold',
    },
    {
      id: 'french-nail-art',
      name: 'Couture French & Micro-Tips',
      category: 'gel-art',
      priceINR: 1299,
      duration: '75 mins',
      description: 'Modern reimaginings of the classic French manicure — micro-skinny tips, double chrome arches, pastel gradients, and deep smile lines.',
      bestFor: 'Understated luxury, office-to-dinner transitions, and minimalist aesthetics',
      features: ['Laser-Straight Smile Lines', 'Nude Sheer Bed Matching', 'Micro-Chrome Edge Accents', 'Zero Staining Top Seal'],
      visualTheme: 'ivory-minimal',
    },
    {
      id: 'chrome-glazed',
      name: 'Chrome & Glazed Donut Nails',
      category: 'gel-art',
      priceINR: 1699,
      duration: '75 mins',
      description: 'Subtle iridescent micro-pigment dust buffed onto milk-bath or sheer blush bases for the coveted pearlescent mirror glow.',
      bestFor: 'Fashionistas, red carpet appearances, and viral TikTok / Instagram trends',
      features: ['Infused Micronized Pearl Dust', 'No-Wipe Mirror Finish', 'Silver, Rose Gold & Mermaid Tones', 'UV Gloss Lock'],
      popular: true,
      visualTheme: 'glazed-pearl',
    },
    {
      id: 'cat-eye-nails',
      name: 'Magnetic Cat-Eye Velvet Finish',
      category: 'gel-art',
      priceINR: 1599,
      duration: '70 mins',
      description: 'Rare-earth magnet particles manipulated in real time to form celestial velvet waves, deep galaxy shifts, and molten silk textures.',
      bestFor: 'Cocktail evenings, night festivities, and dimensional allure',
      features: ['9D Magnetic Particle Gel', 'Multidimensional Light Play', 'Deep Jewel & Champagne Tones', 'Silky Velvet Illusion'],
      visualTheme: 'velvet-cat-eye',
    },
    {
      id: '3d-nail-art',
      name: 'Sculptural 3D Nail Art & Gems',
      category: 'gel-art',
      priceINR: 1999,
      priceNote: 'onwards',
      duration: '90 mins',
      description: 'Handcrafted acrylic flowers, jelly dew drops, Swarovski crystals, molten metal chrome drips, and elevated sculptural charms.',
      bestFor: 'Statement looks, festival fashion, and couture photo shoots',
      features: ['Authentic Crystal Embellishments', 'Hard Resin Encapsulation', 'Textured 3D Chrome Reliefs', 'Anti-Snag Edge Beveling'],
      visualTheme: 'sculptural-3d',
    },
    {
      id: 'bridal-nail-art',
      name: 'Royal Indian Bridal Nail Suite',
      category: 'bridal-festive',
      priceINR: 2499,
      priceNote: 'onwards',
      duration: '120 mins',
      description: 'Bespoke bridal nail couture orchestrated to harmonize with your lehenga embroidery, kundan jewellery, and traditional mehendi hand henna.',
      bestFor: 'Indian brides, sangeet & reception evenings, and royal trousseaus',
      features: ['Bridal Palette Consultation', 'Gold Foil & Kundan Motifs', 'Mehendi-Complementary Tones', 'Reinforced 4-Week Hold'],
      popular: true,
      visualTheme: 'royal-bridal',
    },
    {
      id: 'festive-nail-art',
      name: 'Diwali & Festive Celebration Sets',
      category: 'bridal-festive',
      priceINR: 1899,
      priceNote: 'onwards',
      duration: '80 mins',
      description: 'Dazzling combinations of champagne glitter ombré, marigold yellow accents, temple gold leafing, and festive fireworks motifs.',
      bestFor: 'Diwali, Karwa Chauth, Navratri, Eid, and wedding guests',
      features: ['Fine Holographic Glitter', 'Intricate Hand-Painted Filigree', 'Festive Gem Accents', 'Instant Party Readiness'],
      visualTheme: 'festive-gold',
    },
    {
      id: 'nail-refill-maintenance',
      name: 'Gel & Acrylic Refill & Rebalance',
      category: 'care',
      priceINR: 899,
      duration: '60 mins',
      description: 'Seamless backfill of natural regrowth, re-apex balancing, reshaping, cuticle reconditioning, and fresh gel color change.',
      bestFor: 'Clients at the 3 to 4 week mark keeping extensions healthy',
      features: ['Stress-Point Rebalancing', 'Lift-Free Seamless Blending', 'Cuticle Vitamin Treatment', 'Shape Re-Sculpting'],
      visualTheme: 'care-refill',
    },
    {
      id: 'gentle-nail-removal',
      name: 'Damage-Free Safe Gel & Extension Removal',
      category: 'care',
      priceINR: 499,
      duration: '40 mins',
      description: 'No harsh electric drill scraping. Gentle foil soak, ceramic e-file smoothing, and deep keratin nail conditioning treatment.',
      bestFor: 'Safely resetting natural nails and rejuvenating keratin plates',
      features: ['Acetone-Safe Foil Wraps', 'Zero Nail Bed Peeling', 'Jojoba Keratin Infusion', 'Protective Calcium Seal'],
      visualTheme: 'care-safe',
    },
  ] as ServiceItem[],

  // Best-Selling Packages
  packages: [
    {
      id: 'pkg-everyday-luxe',
      name: 'The Modern Minimalist',
      tagline: 'Clean, effortless chic for working professionals',
      priceINR: 1999,
      originalPriceINR: 2398,
      duration: '90 mins',
      recommendedFor: 'Office chic, daily durability, low maintenance',
      includes: [
        'Classic Spa Manicure with Rosehip Scrub',
        'Builder Gel (BIAB) Natural Nail Reinforcement',
        'Glazed Chrome or Micro French Accent on 4 Nails',
        'Intensive Cuticle Peptide Hydration',
      ],
    },
    {
      id: 'pkg-signature-glam',
      name: 'Signature Bloom Extension Set',
      tagline: 'Our most requested studio transformation',
      priceINR: 2699,
      originalPriceINR: 3198,
      duration: '110 mins',
      isBestseller: true,
      recommendedFor: 'Birthdays, vacations, high-fashion styling',
      includes: [
        'Sculpted Gel Extensions (Choice of Almond / Coffin)',
        'Full Set Velvet Cat-Eye or Pearl Chrome Pigment',
        'Custom Accent Nail Art (2 nails of 3D or foil design)',
        'Free 7-Day Accidental Chip & Lift Warranty',
      ],
    },
    {
      id: 'pkg-royal-bridal',
      name: 'The Royal Indian Dulhan Suite',
      tagline: 'Conceived for the modern bride and bridal party',
      priceINR: 3999,
      originalPriceINR: 4898,
      duration: '150 mins',
      recommendedFor: 'Brides, engagement ceremonies, sangeet rituals',
      includes: [
        'Pre-Wedding Consultation matching lehenga & jewellery',
        'Full Sculpted Soft Gel Extensions with Custom Taper',
        'Intricate Bridal Art with Gold Leaf & Micro Swarovski Gems',
        'Luxury Hand Mask & 24K Gold Serum Massage',
        'Complimentary Post-Honeymoon Safe Removal Voucher',
      ],
    },
    {
      id: 'pkg-festive-trio',
      name: 'Utsav Festive Glam Duo',
      tagline: 'Ideal for Diwali, Navratri, or wedding guest looks',
      priceINR: 2299,
      originalPriceINR: 2798,
      duration: '90 mins',
      recommendedFor: 'Festivals, sangeet guests, family celebrations',
      includes: [
        'Long-Wear Gel Polish on Natural Nails or Overlays',
        'Champagne Gold Glitter Ombré or Metallic Hand-Paint',
        'Exfoliating Saffron & Almond Hand Glow Polish',
        'Ultra-Glossy Heat-Resistant Top Coat',
      ],
    },
  ] as PackageItem[],

  // Academy Courses
  courses: [
    {
      id: 'course-beginner',
      name: 'Foundation in Professional Nail Art',
      level: 'Beginner',
      feeINR: 4999,
      feeNote: 'Starter kit available separately',
      duration: '3 Days (12 Hours)',
      schedule: 'Weekend & Weekday Batches Available',
      summary: 'Designed for enthusiasts and salon apprentices stepping into the beauty industry with strong fundamentals.',
      handsOnHours: '8 Hours Practical on Silicon Finger & Live Models',
      certification: 'Blush & Bloom Foundation Certificate in Nail Artistry',
      kitIncluded: false,
      kitDetails: ['Starter Practice Nail Wheel', 'Dotted Dotting Tools (5 pcs)', 'Fine Liner Brush Set', 'Color Swatches'],
      modules: [
        'Natural Nail Anatomy, Hygiene & Sterilization Basics',
        'Russian Prep Technique & Precision Cuticle Care',
        'Flawless Gel Polish Application & Streak-Free Finish',
        'Core Nail Art: Striping, Polka Dots, Foiling & Ombré Gradients',
        'Safe Gel Polish Removal & Client Consultation Protocols',
      ],
    },
    {
      id: 'course-master-technician',
      name: 'Certified Professional Nail Technician Diploma',
      level: 'Professional',
      feeINR: 14999,
      feeNote: 'Comprehensive 40+ Piece Master Kit Included',
      duration: '2 Weeks (40 Hours Intensive)',
      schedule: 'Monday – Friday, 11:00 AM – 3:30 PM',
      summary: 'Our flagship career-builder course designed to launch your career as an independent salon artist or studio entrepreneur.',
      handsOnHours: '28 Hours Hands-on Practice with Live Client Assessments',
      certification: 'Certified Master Nail Technician Professional Diploma',
      featured: true,
      kitIncluded: true,
      kitDetails: [
        'Professional 48W UV/LED Cure Lamp',
        'Full Set Soft Gel Extension Tips & Sculpting Gels',
        'Electric E-File Machine with 6 Carbide & Diamond Bits',
        'Top, Base & 10 Signature Gel Pigment Shades',
        'Complete Brush Portfolio, Crystals, Chrome Powders & Foils',
        'Sanitization Jar, Lint-Free Wipes & Cuticle Nippers',
      ],
      modules: [
        'Comprehensive Chemistry: Monomers, Polymers & LED Photo-Initiators',
        'Russian E-File Cuticle Prep & Deep Combi-Manicure',
        'Sculpted Gel Extensions (Form Sculpting vs Full Cover Tips)',
        'Apex Architecture, Structural Balancing & Pinching Curves',
        'Acrylic Sculpting & Poly-Gel Hybrid Systems',
        'Commercial Nail Art: French, Chrome, Marble & Cat-Eye',
        'Refill, Rebalancing & Safe Non-Damaging E-File Removal',
        'Instagram Portfolio Photography, Pricing Strategy & Salon Setup',
      ],
    },
    {
      id: 'course-gel-extension-masterclass',
      name: 'Gel Extensions & Apex Architecture Masterclass',
      level: 'Intermediate',
      feeINR: 8499,
      duration: '5 Days (20 Hours)',
      schedule: 'Flexible Evening & Weekend Batches',
      summary: 'Deep-dive into seamless soft gel, builder gel (BIAB) overlays, and flawless curve geometry without thick bulky edges.',
      handsOnHours: '14 Hours Dedicated Practical Training',
      certification: 'Certificate in Advanced Gel Sculpture & BIAB',
      kitIncluded: true,
      kitDetails: ['Builder in a Bottle (BIAB) Trio', 'Paper Sculpting Forms (200 pcs)', 'Pinching Tool', 'Sculpting Gel Brushes'],
      modules: [
        'Understanding Nail Bed Shapes & Flat/Spoon Nail Correction',
        'Paper Form Tailoring for Almond, Stiletto, and Ballerina',
        'Apex Placement & Weight Distribution to Prevent Breaks',
        'Zero-Heat Spike Cure Techniques with Low-Heat Gel Formulations',
        'Speed Filing & 45-Minute Extension Service Workflows',
      ],
    },
    {
      id: 'course-advanced-3d-bridal',
      name: 'Advanced Couture 3D & Indian Bridal Nail Art',
      level: 'Masterclass',
      feeINR: 7999,
      duration: '4 Days (16 Hours)',
      schedule: 'Weekend Special Batch',
      summary: 'Craft high-ticket bridal and festive nail art that commands ₹2,500+ per client. Kundan embedding, 3D acrylic flora, and chrome reliefs.',
      handsOnHours: '12 Hours High-Detail Art Practice',
      certification: 'Certificate in Couture Bridal & 3D Nail Artistry',
      kitIncluded: true,
      kitDetails: ['Kolinsky 3D Carving Brush #4', '3D Sculpting Gel Pastes (6 Colors)', 'Genuine Swarovski Assortment', 'Real Gold & Silver Foil Rolls'],
      modules: [
        'Indian Bridal Aesthetics: Matching Warm Gold Zari & Silk Lehengas',
        '3D Acrylic Flora & Japanese Relief Embossing',
        'Micro-Gem Clustering & No-Fallout Diamond Encapsulation',
        'Liquid Metal Chrome Drips & Baroque Scrollwork',
        'Wedding Morning Mobile Kit Setup & Rapid Bridal Workflows',
      ],
    },
    {
      id: 'course-one-day-workshop',
      name: 'One-Day Intensive Nail Art Master Workshop',
      level: 'Beginner',
      feeINR: 2499,
      duration: '1 Full Day (6 Hours)',
      schedule: 'Every Second Sunday',
      summary: 'A fast-paced masterclass in viral nail trends: glazed chrome, cat-eye magnetic effects, and modern French lines for practicing beauticians.',
      handsOnHours: '4 Hours Guided Live Practice',
      certification: 'Workshop Participation Certificate',
      kitIncluded: false,
      kitDetails: ['Practice Tip Sticks', 'Cat-Eye Magnet Wand', 'Chrome Pigment Applicators'],
      modules: [
        'Unlocking Glazed Donut & Holographic Chrome Techniques',
        'Velvet Cat-Eye 3D Magnetic Control',
        'Creating Razor-Sharp French Tips in under 15 minutes',
        'Social Media Content Creation: Lighting & Hand Posing Tips',
      ],
    },
  ] as CourseItem[],

  // Gallery Showcase Items
  gallery: [
    {
      id: 'gal-1',
      title: 'Kundan & Rose Gold Bridal Suite',
      category: 'bridal',
      technique: 'Sculpted Gel with Hand-Placed Gold Leaf & Micro Gems',
      caption: 'Created for a Pune bride matching a blush Banarasi lehenga.',
      tags: ['Bridal', 'Gold Leaf', 'Kundan', 'Blush Almond'],
      colors: ['#E07A94', '#D4AF37', '#FFF5F5'],
    },
    {
      id: 'gal-2',
      title: 'Glazed Donut Pearl Sheen',
      category: 'chrome',
      technique: 'Milky White Base with Micronized Glazed Pearl Dust',
      caption: 'The quintessential minimalist luxury manicure, catching every beam of sunlight.',
      tags: ['Chrome', 'Glazed Donut', 'Hailey Bieber Trend', 'Clean Girl'],
      colors: ['#FAF0E6', '#F5E1D2', '#FFFFFF'],
    },
    {
      id: 'gal-3',
      title: 'Micro-Gold Arch French Tips',
      category: 'french',
      technique: 'Sheer Peach Foundation with Mirror Chrome Free Edge',
      caption: 'An ultra-slim modern reinterpretation of the classic French manicure.',
      tags: ['Modern French', 'Micro Tip', 'Rose Gold', 'Corporate Chic'],
      colors: ['#F7D8D0', '#C48B71', '#FFFFFF'],
    },
    {
      id: 'gal-4',
      title: 'Velvet Champagne Cat-Eye',
      category: 'festive',
      technique: '9D Magnetic Pigment sculpted into soft liquid silk wave',
      caption: 'Dimensional optical depth that shimmers dynamically under evening chandeliers.',
      tags: ['Cat-Eye', 'Magnetic Velvet', 'Champagne', 'Sangeet Look'],
      colors: ['#C5A059', '#3E2723', '#F3E5AB'],
    },
    {
      id: 'gal-5',
      title: 'Blush Ombré with 3D Dew Drops',
      category: 'minimal',
      technique: 'Airbrush Baby Boomer Fade with Clear Acrylic Glass Drops',
      caption: 'Soft, feminine gradient with tactile crystalline micro-embellishments.',
      tags: ['Baby Boomer', 'Ombré', '3D Dew Drops', 'Soft Girl'],
      colors: ['#FAD2E1', '#FAF8F5', '#E2ECE9'],
    },
    {
      id: 'gal-6',
      title: 'Royal Mehendi Gold Filigree',
      category: 'bridal',
      technique: 'High-Detail Fine Brush Gold Relief on Deep Maroon Bed',
      caption: 'Traditional Indian filigree patterns complementing bridal henna styling.',
      tags: ['Royal Bridal', 'Gold Filigree', 'Deep Crimson', 'Dulhan'],
      colors: ['#6B1D2F', '#D4AF37', '#FAF0E6'],
    },
    {
      id: 'gal-7',
      title: 'Baroque Chrome Drips & Gems',
      category: 'creative',
      technique: 'Molten Silver Chrome 3D Sculpting with Emerald Rhinestones',
      caption: 'Avant-garde couture nail sculpture featured in festive high-fashion editorials.',
      tags: ['Avant-Garde', '3D Chrome', 'Molten Silver', 'Couture'],
      colors: ['#C0C0C0', '#2E1F21', '#2E8B57'],
    },
    {
      id: 'gal-8',
      title: 'Matte Latte Art & Tortoiseshell',
      category: 'minimal',
      technique: 'Jelly Amber Encapsulation paired with Velvet Matte Taupe',
      caption: 'Warm earthy undertones tailored for coffee dates and autumn layering.',
      tags: ['Tortoiseshell', 'Matte Finish', 'Warm Nude', 'Latte Trend'],
      colors: ['#8D6E63', '#D7CCC8', '#4E342E'],
    },
    {
      id: 'gal-9',
      title: 'Navratri Mirror-Work Accents',
      category: 'festive',
      technique: 'Reflective Foil Shards with Vibrant Turmeric & Vermillion Lines',
      caption: 'Vibrant celebratory styling that catches the garba rhythm and light.',
      tags: ['Navratri', 'Mirror Work', 'Festive Pop', 'Dandiya Night'],
      colors: ['#FF6F00', '#D81B60', '#FFD54F'],
    },
  ] as GalleryItem[],

  // Demonstration Testimonials
  testimonials: [
    {
      id: 't-1',
      clientName: 'Pooja Kulkarni',
      location: 'Aundh, Pune',
      occasion: 'Wedding Sangeet & Reception',
      quote:
        '“I got the Royal Bridal set for my wedding week. Between my mehendi, cooking rituals, and dancing, not a single gem loosened! Ananya matched my lehenga tone with perfection.”',
      serviceTaken: 'Royal Indian Bridal Suite',
      rating: 5,
      date: 'November 2025',
      isDemoNote: 'Demonstration Testimonial (Placeholder for prospective client)',
    },
    {
      id: 't-2',
      clientName: 'Rhea Deshmukh',
      location: 'Baner, Pune',
      occasion: 'Routine Care & Office Styling',
      quote:
        '“The BIAB builder gel completely restored my brittle nails after years of harsh salon drilling elsewhere. The autoclave hygiene protocols at Blush & Bloom make me feel completely safe.”',
      serviceTaken: 'Builder Gel Overlay (BIAB)',
      rating: 5,
      date: 'January 2026',
      isDemoNote: 'Demonstration Testimonial (Placeholder for prospective client)',
    },
    {
      id: 't-3',
      clientName: 'Tanvi Agarwal',
      location: 'Kalyani Nagar, Pune',
      occasion: 'Academy Graduate — Certified Professional Diploma',
      quote:
        '“Taking the 2-week Professional Diploma was the best decision for my career. The hands-on model practice and social media pricing modules gave me the confidence to open my own home studio.”',
      serviceTaken: 'Certified Professional Nail Technician Diploma',
      rating: 5,
      date: 'December 2025',
      isDemoNote: 'Demonstration Graduate Review (Placeholder for prospective client)',
    },
    {
      id: 't-4',
      clientName: 'Meera Iyer',
      location: 'Wakad, Pune',
      occasion: 'Diwali Festive Family Gathering',
      quote:
        '“The glazed chrome finish lasted a full month without peeling! Plus, booking via WhatsApp was so effortless. Definitely the chicest nail boutique in West Pune.”',
      serviceTaken: 'Chrome & Glazed Donut Set',
      rating: 5,
      date: 'October 2025',
      isDemoNote: 'Demonstration Testimonial (Placeholder for prospective client)',
    },
  ] as TestimonialItem[],

  // Frequently Asked Questions
  faqs: [
    {
      category: 'appointments',
      question: 'How do I book an appointment, and how far in advance should I schedule?',
      answer:
        'You can tap the “Book on WhatsApp” button on any service or fill out our quick online appointment form. For routine gel manicures, we recommend 1–2 days prior notice. For bridal nail suites, we recommend booking 10–14 days in advance to reserve our private bridal booth.',
    },
    {
      category: 'care',
      question: 'How long do gel extensions and builder gel (BIAB) last?',
      answer:
        'Our gel extensions and BIAB overlays typically last between 3 to 4 weeks with proper care. We recommend visiting us for a refill or rebalancing at the 3-week mark to prevent leverage stress on your natural nail apex as it grows.',
    },
    {
      category: 'care',
      question: 'Will getting nail extensions damage my natural nails?',
      answer:
        'No. Natural nail damage occurs from aggressive over-filing or ripping extensions off forcefully. At Blush & Bloom, we use medical-grade Russian dry prep, low-vibration diamond bits, and safe soaking methods that preserve your keratin nail plate intact.',
    },
    {
      category: 'bridal',
      question: 'Can you match my bridal nail art with my wedding outfit and jewellery?',
      answer:
        'Yes, absolutely! We love custom creations. During your bridal consultation, you can share photos of your lehenga embroidery, jewellery metals (kundan, polki, rose gold), and mehendi design. We will create a bespoke color swatch to match your exact aesthetic.',
    },
    {
      category: 'academy',
      question: 'Do I need prior beauty parlour or drawing experience to join the academy courses?',
      answer:
        'Not at all. Our “Foundation in Professional Nail Art” and “Diploma in Professional Nail Tech” courses are structured from ground zero. We teach nail biology, brush dexterity, and product chemistry step-by-step so anyone with passion can excel.',
    },
    {
      category: 'academy',
      question: 'Is a professional tool and product kit included with the academy diploma?',
      answer:
        'Yes. The 2-Week Professional Diploma includes our complete 40+ item Master Nail Kit containing a dual 48W LED/UV lamp, electric E-file machine with diamond bits, premium gel shades, sculpting gels, and brushes to start taking paying clients immediately.',
    },
    {
      category: 'academy',
      question: 'Do students receive a recognized certificate upon completion?',
      answer:
        'Yes. Graduates who successfully complete theoretical safety tests and live model assessments receive our formal Blush & Bloom Academy Diploma, signed by our lead educator, verifying practical hours and techniques mastered.',
    },
    {
      category: 'appointments',
      question: 'What is your rescheduling and cancellation policy?',
      answer:
        'We appreciate at least 4 hours advance notice for appointment rescheduling so we can offer the time slot to waitlisted clients. There are no penalty fees for rescheduling via WhatsApp within the notification window.',
    },
  ] as FAQItem[],

  // Hygiene & Safety Commitments
  hygieneStandards: [
    {
      title: '7-Step Autoclave Sterilization',
      description: 'Every metal tool passes through ultrasonic cleaning, surgical disinfectant, and medical hospital-grade autoclave sterilization in sealed pouches opened in front of you.',
    },
    {
      title: 'Single-Use Disposable Files & Buffers',
      description: 'Nail files, orange wood sticks, and sanding bands are never reused across clients. You may take your file kit home after each session.',
    },
    {
      title: 'Cruelty-Free 10-Free Gel Formulas',
      description: 'We strictly stock certified non-toxic gels free from formaldehyde, toluene, DBP, and heavy metals, safeguarding your long-term wellness.',
    },
    {
      title: 'Built-in Source Air Dust Extraction',
      description: 'Each manicure station features quiet localized vacuum capture to eliminate micro-dust particles and chemical aromas from the studio air.',
    },
  ],
};
