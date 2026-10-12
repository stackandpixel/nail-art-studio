# Blush & Bloom Nail Studio & Academy — Sales Demo Project
**Created by Stack & Pixel (Website Development Agency)**

A premium, conversion-focused Indian nail art studio and professional academy website built with React, TypeScript, Vite, and Tailwind CSS.

---

## 💅 About the Project

This website is a production-grade sales demo designed for presentation to prospective Indian nail art salon owners and academy directors. It showcases:
- **Salon Services**: Russian manicure prep, gel extensions, acrylic sculpting, BIAB overlays, glazed chrome, cat-eye velvet, and Indian bridal nail suites.
- **Academy Courses**: Complete course curriculum from beginner foundation to a 2-week Professional Nail Technician Diploma.
- **Zero-Backend WhatsApp Routing**: Direct click-to-chat links with prefilled and URL-encoded appointment and course enquiries.
- **Email Form Delivery**: Formspree / Web3Forms support with graceful demo simulation and fallback.
- **Responsive Luxury Aesthetic**: Blush pink, warm ivory, nude beige, and rose gold accents with serif display headings.
- **Centralized Configuration**: All salon details, pricing, syllabi, and contact links live in `src/config/studioConfig.ts`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with custom serif typography (`Playfair Display` + `Plus Jakarta Sans`)
- **Icons**: Lucide React
- **Hosting Target**: Static deployment on Vercel, Netlify, Cloudflare Pages, or AWS S3

---

## 🚀 Quick Start & Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the website.

3. **Build for production**:
   ```bash
   npm run build
   ```
   Outputs optimized static assets to the `dist/` directory.

---

## ⚙️ Customization Guide for New Clients

To adapt this demo for a real client, simply edit **`src/config/studioConfig.ts`**:

### 1. WhatsApp Configuration
Replace the default demo phone number:
```typescript
contact: {
  phone: '+91 98765 43210',
  whatsappNumber: '919876543210', // Digits only, including country code (91 for India)
}
```

### 2. Formspree / Web3Forms Setup
To receive automated email alerts whenever a customer books an appointment:
1. Sign up for free at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Create a new form with your client's email as the recipient.
3. Paste the form URL into `studioConfig.ts`:
   ```typescript
   forms: {
     formspreeEndpoint: 'https://formspree.io/f/your_form_id_here',
     notificationEmail: 'owner@realsalonname.in',
   }
   ```

### 3. Google Maps Embed
1. Search your client's salon on Google Maps.
2. Click **Share** -> **Embed a map** -> **Copy HTML**.
3. Extract the `src` URL and replace `contact.googleMapsEmbedUrl` in `studioConfig.ts`.

### 4. Updating Services & Pricing
Edit the `services`, `packages`, or `courses` arrays in `studioConfig.ts`. All INR currency symbols and formatting are handled automatically.

---

## 📋 Pre-Launch Verification Checklist

Before launching a client website using this codebase:
- [ ] Replace all fictional contact details (+91 phone, address, email) in `studioConfig.ts`.
- [ ] Connect a live Formspree or Web3Forms endpoint for email booking notifications.
- [ ] Replace demo testimonials with genuine Google My Business or Instagram client reviews.
- [ ] Verify WhatsApp links open properly on mobile devices.
- [ ] Update Google Maps iframe embed with the confirmed studio location.
- [ ] Verify SEO title, description, and OpenGraph tags in `index.html`.
- [ ] Point custom domain via DNS records (A / CNAME) on Vercel or Cloudflare Pages.

---

## 🏢 Agency Attribution

Created by **Stack & Pixel** — Custom Websites & Web Apps for Indian Beauty and Lifestyle Brands.
