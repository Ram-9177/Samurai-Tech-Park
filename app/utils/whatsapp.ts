// WhatsApp Integration for Mobile-First Indian Market
export const WHATSAPP_NUMBER = '9177903061'

export const openWhatsApp = (message?: string) => {
  const defaultMessage = message || 'Namaste! I\'m interested in your services. Can you help me?'
  const encodedMessage = encodeURIComponent(defaultMessage)
  
  // Check if it's mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Direct WhatsApp app opening for mobile
    window.location.href = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
  } else {
    // WhatsApp Web for desktop
    window.open(`https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`, '_blank');
  }
}

export const openWhatsAppWithService = (service: string) => {
  const message = `Namaste! I'm interested in your ${service} services. Can you provide more details and pricing?`
  openWhatsApp(message)
}

export const openWhatsAppWithProject = (projectType: string) => {
  const message = `Hello! I need help with my ${projectType} project. Can you assist me with timeline and pricing?`
  openWhatsApp(message)
}

export const openWhatsAppForQuote = () => {
  const message = `Hi Sri Ram! I need a quote for your services. Please share your pricing and availability.`
  openWhatsApp(message)
}

export const openWhatsAppForSupport = () => {
  const message = `Hello! I need technical support. Can you help me resolve my issue?`
  openWhatsApp(message)
}

// Enhanced lead tracking for Indian market
export const trackLeadConversion = (source: string, action: string, details?: any) => {
  // Enhanced tracking for Indian market
  const leadData = {
    source,
    action,
    details,
    timestamp: new Date().toISOString(),
    country: 'India',
    language: 'English/Hindi/Telugu',
    ...details
  };
  
  console.log('Lead Conversion:', leadData)
  
  // Store in localStorage for offline tracking
  const existingLeads = JSON.parse(localStorage.getItem('samurai_leads') || '[]');
  existingLeads.push(leadData);
  localStorage.setItem('samurai_leads', JSON.stringify(existingLeads));
  
  // Integrate with Google Analytics, Facebook Pixel, etc.
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'lead_conversion', {
      event_category: 'engagement',
      event_label: `${source}_${action}`,
      value: 1,
      country: 'India'
    })
  }
}

// Contact form submission tracking
export const trackContactFormSubmission = (formData: any) => {
  const submissionData = {
    ...formData,
    timestamp: new Date().toISOString(),
    country: 'India',
    source: 'website_form'
  };
  
  trackLeadConversion('contact_form', 'form_submission', submissionData)
  
  // Store for offline tracking
  const existingSubmissions = JSON.parse(localStorage.getItem('samurai_submissions') || '[]');
  existingSubmissions.push(submissionData);
  localStorage.setItem('samurai_submissions', JSON.stringify(existingSubmissions));
}

// Service inquiry tracking
export const trackServiceInquiry = (service: string) => {
  trackLeadConversion('service_inquiry', service, { service, country: 'India' })
}

// Project inquiry tracking
export const trackProjectInquiry = (projectType: string) => {
  trackLeadConversion('project_inquiry', projectType, { projectType, country: 'India' })
}
