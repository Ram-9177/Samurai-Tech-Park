'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRobot, FaCog, FaPlay, FaDownload, FaChartLine, FaUsers, FaClock, FaShieldAlt, FaEnvelope, FaArrowRight, FaWhatsapp, FaCheckCircle, FaLightbulb, FaHandshake, FaAward, FaGlobe, FaDatabase, FaCloud, FaMobile, FaDesktop } from 'react-icons/fa'
import { openWhatsApp, trackLeadConversion, trackServiceInquiry } from '../utils/whatsapp'

const AutomationToolsPage = () => {
  const tools = [
    {
      title: 'Web Scraping Bot',
      description: 'Automated data extraction from websites with intelligent parsing',
      icon: FaRobot,
      color: 'from-blue-500 to-blue-600',
      features: ['Data Extraction', 'Anti-Detection', 'Scheduled Runs', 'Export Formats'],
      price: 'Starting at ₹5,000',
      demo: true
    },
    {
      title: 'Social Media Manager',
      description: 'Automate posting, scheduling, and engagement across platforms',
      icon: FaUsers,
      color: 'from-green-500 to-green-600',
      features: ['Multi-Platform', 'Content Scheduling', 'Analytics', 'Auto-Engagement'],
      price: 'Starting at ₹8,000',
      demo: true
    },
    {
      title: 'Email Automation',
      description: 'Smart email campaigns with personalized content and triggers',
      icon: FaEnvelope,
      color: 'from-purple-500 to-purple-600',
      features: ['Drip Campaigns', 'Personalization', 'A/B Testing', 'Analytics'],
      price: 'Starting at ₹6,000',
      demo: true
    },
    {
      title: 'Data Processing Pipeline',
      description: 'Automated data cleaning, transformation, and analysis workflows',
      icon: FaDatabase,
      color: 'from-orange-500 to-orange-600',
      features: ['ETL Processes', 'Data Validation', 'Error Handling', 'Monitoring'],
      price: 'Starting at ₹10,000',
      demo: true
    },
    {
      title: 'Inventory Management',
      description: 'Automated stock tracking, alerts, and reorder processes',
      icon: FaChartLine,
      color: 'from-red-500 to-red-600',
      features: ['Stock Tracking', 'Auto-Reorder', 'Low Stock Alerts', 'Reporting'],
      price: 'Starting at ₹7,000',
      demo: true
    },
    {
      title: 'Customer Support Bot',
      description: 'AI-powered chatbot for 24/7 customer support and lead qualification',
      icon: FaHandshake,
      color: 'from-indigo-500 to-indigo-600',
      features: ['Natural Language', 'Lead Qualification', 'Ticket Routing', 'Analytics'],
      price: 'Starting at ₹12,000',
      demo: true
    }
  ]

  const categories = [
    {
      title: 'Business Automation',
      description: 'Streamline your business processes and increase efficiency',
      icon: FaCog,
      color: 'text-blue-400',
      tools: ['CRM Integration', 'Invoice Processing', 'Report Generation', 'Workflow Management']
    },
    {
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns and customer engagement',
      icon: FaChartLine,
      color: 'text-green-400',
      tools: ['Email Campaigns', 'Social Media', 'Lead Nurturing', 'Analytics']
    },
    {
      title: 'Data Automation',
      description: 'Automate data collection, processing, and analysis',
      icon: FaDatabase,
      color: 'text-purple-400',
      tools: ['Web Scraping', 'Data Cleaning', 'ETL Processes', 'Reporting']
    },
    {
      title: 'Customer Service',
      description: 'Enhance customer experience with automated support',
      icon: FaUsers,
      color: 'text-orange-400',
      tools: ['Chatbots', 'Ticket Routing', 'Response Automation', 'Analytics']
    }
  ]

  const benefits = [
    {
      title: 'Save Time',
      description: 'Reduce manual work by up to 80% with intelligent automation',
      icon: FaClock,
      color: 'text-blue-400'
    },
    {
      title: 'Increase Accuracy',
      description: 'Eliminate human errors with consistent, reliable processes',
      icon: FaShieldAlt,
      color: 'text-green-400'
    },
    {
      title: 'Scale Operations',
      description: 'Handle growing workloads without proportional staff increases',
      icon: FaChartLine,
      color: 'text-purple-400'
    },
    {
      title: '24/7 Operations',
      description: 'Keep your business running around the clock',
      icon: FaGlobe,
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
              <FaRobot className="text-orange-400 text-sm mr-2" />
              <span className="text-sm font-medium text-white">Automation Tools</span>
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
                  Automation Solutions
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Powerful automation tools to streamline your workflows, reduce manual work, and boost productivity across your business.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/contact" className="btn-neon flex items-center justify-center px-8 py-4 text-lg">
                <FaPlay className="mr-2" />
                View Demo
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/contact" className="btn-neon flex items-center justify-center px-8 py-4 text-lg">
                <FaEnvelope className="mr-2" />
                Get Quote
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'automation_hero')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
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
              Our <span className="text-blue-400">Tools</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready-to-use automation solutions for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <tool.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">{tool.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base text-center">{tool.description}</p>
                
                <div className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-4">
                  <span className="text-lg font-bold text-blue-400">{tool.price}</span>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      trackServiceInquiry(tool.title)
                    }}
                    className="flex-1 btn-neon py-2 text-sm"
                  >
                    <FaPlay className="mr-1" />
                    Demo
                  </button>
                  <Link 
                    href="/contact"
                    className="flex-1 btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white py-2 text-sm"
                  >
                    <FaEnvelope className="mr-1" />
                    Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Automation <span className="text-blue-400">Categories</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive automation solutions across different business areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-blue-600' :
                  index === 1 ? 'from-green-500 to-green-600' :
                  index === 2 ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{category.description}</p>
                <div className="space-y-1">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="text-xs text-gray-300">
                      • {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Choose <span className="text-blue-400">Automation</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with intelligent automation solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-blue-600' :
                  index === 1 ? 'from-green-500 to-green-600' :
                  index === 2 ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-bg text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to <span className="text-blue-400">Automate</span> Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Let's discuss your automation needs and create custom solutions for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-neon px-8 py-4 text-lg">
                <FaEnvelope className="mr-2" />
                <span>Get Quote</span>
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'automation_cta')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg"
              >
                <FaWhatsapp className="mr-2" />
                <span>WhatsApp</span>
              </button>
              <Link href="/contact" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white px-8 py-4 text-lg">
                <span>View Demo</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AutomationToolsPage