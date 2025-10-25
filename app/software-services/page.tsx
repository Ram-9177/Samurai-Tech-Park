'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCode, FaRocket, FaMobile, FaDesktop, FaCloud, FaDatabase, FaShieldAlt, FaCog, FaUsers, FaChartLine, FaEnvelope, FaArrowRight, FaPlay, FaWhatsapp, FaCheckCircle, FaLightbulb, FaHandshake, FaAward, FaGlobe } from 'react-icons/fa'
import { openWhatsApp, trackLeadConversion, trackServiceInquiry } from '../utils/whatsapp'

const SoftwareServicesPage = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: FaDesktop,
      color: 'from-blue-500 to-blue-600',
      features: ['React/Next.js', 'Node.js', 'Responsive Design', 'SEO Optimized']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: FaMobile,
      color: 'from-green-500 to-green-600',
      features: ['React Native', 'Flutter', 'Native Development', 'App Store Ready']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions',
      icon: FaCloud,
      color: 'from-purple-500 to-purple-600',
      features: ['AWS/Azure', 'Docker', 'Kubernetes', 'Auto Scaling']
    },
    {
      title: 'Database Design',
      description: 'Optimized database architecture and management systems',
      icon: FaDatabase,
      color: 'from-orange-500 to-orange-600',
      features: ['SQL/NoSQL', 'Performance Tuning', 'Data Migration', 'Backup Solutions']
    },
    {
      title: 'Security Solutions',
      description: 'Comprehensive security implementation and monitoring',
      icon: FaShieldAlt,
      color: 'from-red-500 to-red-600',
      features: ['SSL/TLS', 'Authentication', 'Penetration Testing', 'Security Audits']
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration',
      icon: FaCog,
      color: 'from-indigo-500 to-indigo-600',
      features: ['REST APIs', 'GraphQL', 'Documentation', 'Rate Limiting']
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap',
      icon: FaLightbulb,
      color: 'text-blue-400'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Create wireframes, mockups, and technical architecture',
      icon: FaCode,
      color: 'text-green-400'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your solution with rigorous testing and quality assurance',
      icon: FaCog,
      color: 'text-purple-400'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Deploy your solution and provide ongoing maintenance',
      icon: FaRocket,
      color: 'text-orange-400'
    }
  ]

  const technologies = [
    { name: 'React', category: 'Frontend', color: 'text-blue-400' },
    { name: 'Next.js', category: 'Frontend', color: 'text-blue-400' },
    { name: 'Node.js', category: 'Backend', color: 'text-green-400' },
    { name: 'Python', category: 'Backend', color: 'text-green-400' },
    { name: 'TypeScript', category: 'Language', color: 'text-purple-400' },
    { name: 'PostgreSQL', category: 'Database', color: 'text-purple-400' },
    { name: 'MongoDB', category: 'Database', color: 'text-orange-400' },
    { name: 'AWS', category: 'Cloud', color: 'text-orange-400' },
    { name: 'Docker', category: 'DevOps', color: 'text-indigo-400' },
    { name: 'Kubernetes', category: 'DevOps', color: 'text-indigo-400' }
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
              <FaDesktop className="text-orange-400 text-sm mr-2" />
              <span className="text-sm font-medium text-white">Software Services</span>
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
                  Software Development
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Custom software solutions and SaaS products built with cutting-edge technologies to drive your business forward.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/products" className="btn-neon flex items-center justify-center px-8 py-4 text-lg">
                <FaPlay className="mr-2 text-blue-400" />
                View Portfolio
                <FaArrowRight className="ml-2 text-blue-400" />
              </Link>
              <Link href="/contact" className="btn-neon flex items-center justify-center px-8 py-4 text-lg">
                <FaEnvelope className="mr-2 text-blue-400" />
                Get Quote
                <FaArrowRight className="ml-2 text-blue-400" />
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'software_hero')
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

      {/* Services Grid */}
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
              Our <span className="text-blue-400">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive software development solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 group hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  trackServiceInquiry(service.title)
                }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base text-center">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              Our <span className="text-blue-400">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for delivering exceptional software solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => (
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
                  <step.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${step.color}`}>{step.step}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
              Technology <span className="text-blue-400">Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Modern technologies and frameworks we use to build exceptional software
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-neon p-4 md:p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <h3 className={`text-sm md:text-base font-bold ${tech.color} mb-1`}>{tech.name}</h3>
                <p className="text-xs md:text-sm text-gray-400">{tech.category}</p>
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
              Ready to Build Your <span className="text-blue-400">Software</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-neon px-8 py-4 text-lg">
                <FaEnvelope className="mr-2" />
                <span>Get Quote</span>
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'software_cta')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg"
              >
                <FaWhatsapp className="mr-2" />
                <span>WhatsApp</span>
              </button>
              <Link href="/products" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white px-8 py-4 text-lg">
                <span>View Portfolio</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SoftwareServicesPage