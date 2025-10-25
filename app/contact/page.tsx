'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUser, FaComment, FaBriefcase, FaCog, FaArrowRight, FaCheckCircle, FaLightbulb, FaHandshake, FaAward } from 'react-icons/fa'
import { openWhatsApp, trackContactFormSubmission, trackLeadConversion } from '../utils/whatsapp'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Track lead conversion
    trackContactFormSubmission(formData)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      service: ''
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      value: 'sriram.polakam@gmail.com',
      description: 'Send us an email anytime',
      action: 'mailto:sriram.polakam@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      value: '+91 91779 03061',
      description: 'Speak with Sri Ram',
      action: 'tel:+919177903061',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      value: 'Tenali, Andhra Pradesh',
      description: 'Our headquarters',
      action: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      description: 'IST Time Zone',
      action: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const whyChooseUs = [
    {
      icon: FaLightbulb,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative problem-solving',
      color: 'text-blue-400'
    },
    {
      icon: FaHandshake,
      title: 'Personalized Service',
      description: 'Dedicated support tailored to your specific needs',
      color: 'text-green-400'
    },
    {
      icon: FaAward,
      title: 'Proven Track Record',
      description: '100+ successful projects and satisfied clients',
      color: 'text-purple-400'
    },
    {
      icon: FaCog,
      title: 'Technical Expertise',
      description: 'Deep knowledge in automation and software development',
      color: 'text-orange-400'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-bg overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(#2C3E50 1px, transparent 1px),
              linear-gradient(90deg, #2C3E50 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border border-white/20 backdrop-blur-sm"
            >
              <FaEnvelope className="text-orange-400 text-sm mr-2" />
              <span className="text-sm font-medium text-white">Get in touch with Sri Ram</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="text-blue-400">
                  Contact Us
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Ready to start your next project? Let's discuss how we can help you achieve your goals.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'contact_hero')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg"
              >
                <span className="mr-2">📱</span>
                WhatsApp Us
              </button>
              <Link href="/about" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg">
                <FaArrowRight className="mr-2" />
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to reach us and start your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  if (info.action !== '#') {
                    window.open(info.action, '_blank')
                  }
                }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <info.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-blue-400 text-sm md:text-base mb-2">{info.value}</p>
                <p className="text-gray-400 text-sm md:text-base">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="card-neon p-6 md:p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="automation-tools">Automation Tools</option>
                    <option value="software-services">Software Services</option>
                    <option value="btech-projects">B.Tech Projects</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-neon py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <FaEnvelope className="mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="card-neon p-6"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${
                          index === 0 ? 'from-blue-500 to-blue-600' :
                          index === 1 ? 'from-green-500 to-green-600' :
                          index === 2 ? 'from-purple-500 to-purple-600' :
                          'from-orange-500 to-orange-600'
                        } rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <item.icon className="text-white text-lg" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card-neon p-6 md:p-8 text-center">
                <h4 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h4>
                <p className="text-gray-400 mb-6">Contact Sri Ram directly for urgent inquiries</p>
                <div className="space-y-4">
                  <button 
                    onClick={() => {
                      trackLeadConversion('whatsapp_button', 'contact_form_sidebar')
                      openWhatsApp()
                    }}
                    className="w-full btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white py-3"
                  >
                    <span className="mr-2">📱</span>
                    WhatsApp Now
                  </button>
                  <a 
                    href="tel:+919177903061"
                    className="w-full btn-neon border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-3 flex items-center justify-center"
                  >
                    <FaPhone className="mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-card text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Start Your <span className="text-blue-400">Project</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'contact_cta')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg"
              >
                <span className="mr-2">📱</span>
                <span>WhatsApp</span>
              </button>
              <Link href="/about" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white px-8 py-4 text-lg">
                <span>About Us</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage