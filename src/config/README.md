# Configuration Directory

This directory contains configuration files for the website.

## Contact Configuration

### Setup Instructions

1. **Copy the example file:**
   ```bash
   cp src/config/contact.example.ts src/config/contact.ts
   ```

2. **Edit `contact.ts` with your actual information:**
   - Company name and description
   - Phone numbers (display format and link format)
   - Email addresses
   - Physical address
   - Social media URLs
   - Form submission emails (FormSubmit.co)

3. **Your `contact.ts` is safe:**
   - The file is in `.gitignore` so your real contact info won't be committed to Git
   - Only `contact.example.ts` is tracked by Git

### Files in this directory:

- **`contact.example.ts`** - Example file with placeholder data (committed to Git)
- **`contact.ts`** - Your actual contact info (ignored by Git, not committed)

### Where contact info is used:

- `src/components/Footer.tsx` - Footer with contact info and social media links
- `src/app/about/page.tsx` - Contact form submission

### Important Notes:

- Never commit `contact.ts` to Git (it's already in `.gitignore`)
- Keep `contact.example.ts` updated if you add new fields
- Update production URLs when deploying to live server
