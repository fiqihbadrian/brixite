// ============================================
// CONTACT INFORMATION CONFIGURATION
// ============================================
// This file contains all contact information used throughout the website.
// Edit values here to update contact info across all pages automatically.
// 
// Files that use this config:
// - src/components/Footer.tsx (footer contact info, social media, newsletter)
// - src/app/about/page.tsx (contact form)
//
// After editing, save the file and the changes will appear on the website.
// ============================================

export const contactInfo = {
  // Company Information
  company: {
    name: "Brixite",
    description: "Premium building materials and construction solutions for modern architecture. We provide quality products that stand the test of time.",
    tagline: "Building Excellence, One Brick at a Time"
  },

  // Contact Details
  phone: {
    display: "+62 812-3456-7890", // Format shown to users
    link: "+6281234567890" // Format for tel: and WhatsApp links (no spaces or dashes)
  },

  email: {
    general: "info@brixite.com", // Main contact email (shown in footer)
    support: "info@brixite.com", // Support email
    sales: "info@brixite.com" // Sales email
  },

  // Physical Address
  address: {
    street: "Jl. Construction No. 123",
    city: "Jakarta",
    country: "Indonesia",
    full: "Jl. Construction No. 123, Jakarta, Indonesia" // Complete address shown in footer
  },

  // Social Media Links
  // Update these with your actual social media profile URLs
  socialMedia: {
    facebook: "https://facebook.com/brixite",
    instagram: "https://instagram.com/brixite",
    twitter: "https://twitter.com/brixite",
    linkedin: "https://linkedin.com/company/brixite",
    whatsapp: "https://wa.me/6281234567890" // Can add custom message: ?text=Hello%20Brixite
  },

  // Business Hours
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "Saturday: 9:00 AM - 2:00 PM",
    sunday: "Sunday: Closed"
  }
};

// Form Configuration
// Update these URLs for form submissions
export const formConfig = {
  newsletter: "https://formsubmit.co/info@brixite.biz.id", // Newsletter subscription form
  contact: "https://formsubmit.co/info@brixite.biz.id", // Contact form on About page
  successRedirect: "https://brixite.biz.id/about?success=true" // Redirect URL after form submission (update with production URL when deployed)
};

// ============================================
// USAGE EXAMPLES:
// ============================================
// In your component, import like this:
// import { contactInfo, formConfig } from '../config/contact';
//
// Then use like this:
// {contactInfo.company.name}
// {contactInfo.phone.display}
// {contactInfo.email.general}
// href={contactInfo.socialMedia.facebook}
// ============================================
