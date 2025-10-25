# Deployment Configuration for Samurai Tech Park

## Production Environment Variables
Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_SITE_URL=https://samuraitechpark.com
NEXT_PUBLIC_WHATSAPP_NUMBER=9177903061
NEXT_PUBLIC_CONTACT_EMAIL=sriram.polakam@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+919177903061
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_FB_PIXEL_ID=your-facebook-pixel-id
```

## Deployment Steps

### 1. Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### 2. Netlify Deployment
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the 'out' folder to Netlify
```

### 3. Custom Server Deployment
```bash
# Build the project
npm run build

# Start production server
npm start
```

## Pre-deployment Checklist
- [ ] Update all URLs to production domain
- [ ] Add Google Analytics tracking ID
- [ ] Add Facebook Pixel ID
- [ ] Test all WhatsApp links
- [ ] Verify all contact information
- [ ] Test mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Verify sitemap.xml
- [ ] Test robots.txt

## Post-deployment Tasks
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics tracking
- [ ] Test WhatsApp integration
- [ ] Check mobile performance
- [ ] Monitor error logs
