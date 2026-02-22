// ============================================
// CONTACT INFORMATION CONFIGURATION - EXAMPLE FILE
// ============================================
// This is an EXAMPLE file. Copy this file to create your own contact.ts
// 
// SETUP INSTRUCTIONS:
// 1. Copy this file and rename it to: contact.ts
// 2. Update all values with your actual contact information
// 3. The contact.ts file is in .gitignore so your real data won't be committed to git
// 
// Command to create your config file:
// cp src/config/contact.example.ts src/config/contact.ts
//
// Files that use this config:
// - src/components/Footer.tsx (footer contact info, social media, newsletter)
// - src/app/about/page.tsx (contact form)
// ============================================

export const contactInfo = {
  // Company Information
  company: {
    name: "Your Company Name",
    description: "Your company description goes here. Explain what your business does and what makes you unique.",
    tagline: "Your Company Tagline Here"
  },

  // Contact Details
  phone: {
    display: "+62 XXX-XXXX-XXXX", // Format shown to users (with dashes for readability)
    link: "+62XXXXXXXXXX" // Format for tel: and WhatsApp links (numbers only, no spaces or dashes)
  },

  email: {
    general: "info@yourcompany.com", // Main contact email (shown in footer)
    support: "support@yourcompany.com", // Support email
    sales: "sales@yourcompany.com" // Sales email
  },

  // Physical Address
  address: {
    street: "Jl. Your Street No. 123",
    city: "Your City",
    country: "Indonesia",
    full: "Jl. Your Street No. 123, Your City, Indonesia" // Complete address shown in footer
  },

  // Social Media Links
  // Update these with your actual social media profile URLs
  socialMedia: {
    facebook: "https://facebook.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    whatsapp: "https://wa.me/62XXXXXXXXXX" // Use the same number format as phone.link (can add custom message: ?text=Hello)
  },

  // Business Hours (optional - for future use)
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "Saturday: 9:00 AM - 2:00 PM",
    sunday: "Sunday: Closed"
  }
};

// Form Configuration
// Update these URLs for form submissions using FormSubmit.co
export const formConfig = {
  newsletter: "https://formsubmit.co/your-email@example.com", // Newsletter subscription form
  contact: "https://formsubmit.co/your-email@example.com", // Contact form on About page
  successRedirect: "http://localhost:3000/about?success=true" // Redirect URL after form submission (update with production domain when deployed)
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
// <a href={`tel:${contactInfo.phone.link}`}>Call Us</a>
// <a href={contactInfo.socialMedia.facebook}>Facebook</a>
// ============================================

// ============================================
// FORMSUBMIT.CO SETUP:
// ============================================
// 1. Replace your-email@example.com with your actual email in formConfig
// 2. Submit the form once from your website
// 3. Check your email and confirm the activation link
// 4. That's it! Forms will be sent to your email
// 
// For production, update successRedirect to your actual domain:
// successRedirect: "https://yourdomain.com/about?success=true"
// ============================================
