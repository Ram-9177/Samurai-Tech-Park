'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBox, FaPlay, FaDownload, FaArrowRight, FaEnvelope, FaWhatsapp, FaCheckCircle, FaLightbulb, FaHandshake, FaAward, FaGlobe, FaDatabase, FaCloud, FaMobile, FaDesktop, FaShieldAlt, FaChartLine, FaCog } from 'react-icons/fa'
import { openWhatsApp, trackLeadConversion, trackServiceInquiry } from '../utils/whatsapp'

const ProductsPage = () => {
  const products = [
    {
      title: 'Automation Suite Pro',
      description: 'Complete automation platform for business processes',
      icon: FaCog,
      color: 'from-blue-500 to-blue-600',
      features: ['Workflow Automation', 'API Integration', 'Data Processing', 'Analytics Dashboard'],
      price: 'Starting at ₹15,000/month',
      trial: true
    },
    {
      title: 'Cloud Management Hub',
      description: 'Centralized cloud infrastructure management',
      icon: FaCloud,
      color: 'from-green-500 to-green-600',
      features: ['Multi-Cloud Support', 'Cost Optimization', 'Security Monitoring', 'Auto Scaling'],
      price: 'Starting at ₹12,000/month',
      trial: true
    },
    {
      title: 'AI Analytics Platform',
      description: 'Intelligent data analysis and business insights',
      icon: FaChartLine,
      color: 'from-purple-500 to-purple-600',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'ML Models'],
      price: 'Starting at ₹20,000/month',
      trial: true
    },
    {
      title: 'Security Shield Pro',
      description: 'Comprehensive cybersecurity solution',
      icon: FaShieldAlt,
      color: 'from-red-500 to-red-600',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response'],
      price: 'Starting at ₹18,000/month',
      trial: true
    },
    {
      title: 'Mobile App Builder',
      description: 'No-code mobile application development',
      icon: FaMobile,
      color: 'from-orange-500 to-orange-600',
      features: ['Drag & Drop Builder', 'Cross-Platform', 'App Store Ready', 'Analytics Integration'],
      price: 'Starting at ₹10,000/month',
      trial: true
    },
    {
      title: 'Database Optimizer',
      description: 'Advanced database performance optimization',
      icon: FaDatabase,
      color: 'from-indigo-500 to-indigo-600',
      features: ['Query Optimization', 'Performance Monitoring', 'Backup Solutions', 'Migration Tools'],
      price: 'Starting at ₹8,000/month',
      trial: true
    }
  ]

  const categories = [
    {
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation',
      icon: FaCog,
      color: 'text-blue-400',
      products: ['Workflow Automation', 'Process Optimization', 'Task Management', 'Integration Tools']
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      icon: FaChartLine,
      color: 'text-green-400',
      products: ['Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: FaCloud,
      color: 'text-purple-400',
      products: ['Cloud Migration', 'Infrastructure Management', 'Cost Optimization', 'Security Monitoring']
    },
    {
      title: 'Security Suite',
      description: 'Comprehensive cybersecurity protection',
      icon: FaShieldAlt,
      color: 'text-orange-400',
      products: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response']
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
              <FaBox className="text-orange-400 text-sm mr-2" />
              <span className="text-sm font-medium text-white">Our Products</span>
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
                  Our Products
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Innovative software products and SaaS solutions designed to streamline your business operations and boost productivity.
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
                <FaPlay className="mr-2 text-blue-400" />
                View All Products
                <FaArrowRight className="ml-2 text-blue-400" />
              </Link>
              <Link href="/contact" className="btn-neon flex items-center justify-center px-8 py-4 text-lg">
                <FaDownload className="mr-2 text-blue-400" />
                Free Trials
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'products_hero')
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

      {/* Products Grid */}
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
              Featured <span className="text-blue-400">Products</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional software solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <product.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">{product.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base text-center">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-4">
                  <span className="text-lg font-bold text-blue-400">{product.price}</span>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      trackServiceInquiry(product.title)
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
                    <FaDownload className="mr-1" />
                    Trial
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
              Product <span className="text-blue-400">Categories</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions across different business areas
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
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="text-xs text-gray-300">
                      • {product}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Ready to Try Our <span className="text-blue-400">Products</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-neon px-8 py-4 text-lg">
                <FaDownload className="mr-2" />
                <span>Free Trials</span>
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'products_cta')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg"
              >
                <FaWhatsapp className="mr-2" />
                <span>WhatsApp</span>
              </button>
              <Link href="/contact" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white px-8 py-4 text-lg">
                <span>View All Products</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage