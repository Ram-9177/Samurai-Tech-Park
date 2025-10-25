'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaRocket, FaCode, FaUsers, FaProjectDiagram, FaArrowRight, FaPlay, FaHandshake, FaGraduationCap, FaEnvelope, FaBrain, FaCloud, FaMobile, FaDesktop, FaDatabase, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import { openWhatsApp, trackLeadConversion, trackServiceInquiry } from './utils/whatsapp'

const TypingText = ({ texts, speed = 50 }: { texts: string[], speed?: number }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts, speed])

  return <span className="text-blue-400">{currentText}</span>
}

const HomePage = () => {
  const [counters, setCounters] = useState({
    years: 0,
    members: 0,
    projects: 0,
    clients: 0
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { years: 3, members: 30, projects: 100, clients: 50 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)

        setCounters({
          years: Math.floor(targets.years * easeOut),
          members: Math.floor(targets.members * easeOut),
          projects: Math.floor(targets.projects * easeOut),
          clients: Math.floor(targets.clients * easeOut)
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      title: 'Automation Tools',
      description: 'Streamline your business processes with our custom automation solutions',
      icon: FaRocket,
      color: 'from-blue-500 to-blue-600',
      href: '/automation-tools'
    },
    {
      title: 'Software Development',
      description: 'Build scalable web and mobile applications with modern technologies',
      icon: FaCode,
      color: 'from-green-500 to-green-600',
      href: '/software-services'
    },
    {
      title: 'B.Tech Projects',
      description: 'Complete academic projects for engineering students',
      icon: FaGraduationCap,
      color: 'from-purple-500 to-purple-600',
      href: '/btech-projects'
    },
    {
      title: 'Consulting',
      description: 'Expert guidance for your technology decisions',
      icon: FaBrain,
      color: 'from-orange-500 to-orange-600',
      href: '/contact'
    }
  ]

  const features = [
    {
      title: 'Expert Team',
      description: 'Experienced professionals led by Sri Ram',
      icon: FaUsers,
      color: 'text-blue-400'
    },
    {
      title: 'Modern Technology',
      description: 'Latest tools and frameworks',
      icon: FaCloud,
      color: 'text-green-400'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control',
      icon: FaShieldAlt,
      color: 'text-purple-400'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance',
      icon: FaHandshake,
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
              <FaRocket className="text-orange-400 text-sm mr-2" />
              <span className="text-sm font-medium text-white">🇮🇳 Serving India Online - Founded by Sri Ram</span>
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
                  Samurai Tech Park
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                <TypingText texts={[
                  'Innovation in Technology',
                  'Automation Solutions',
                  'Software Development',
                  'B.Tech Projects',
                  'Digital Transformation'
                ]} />
              </motion.div>
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
                  trackLeadConversion('whatsapp_button', 'hero_section')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg"
              >
                <span className="mr-2">📱</span>
                WhatsApp Now
                <FaArrowRight className="ml-2" />
              </button>
              <Link href="/contact" className="btn-neon flex items-center justify-center px-8 py-4 text-lg">
                <FaEnvelope className="mr-2 text-blue-400" />
                Get Quote
                <FaArrowRight className="ml-2 text-blue-400" />
              </Link>
              <Link href="/about" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg">
                <span>Learn More</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">100+ Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">50+ Clients</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">3+ Years</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: 'Years Experience', value: counters.years, suffix: '+', color: 'blue' },
              { label: 'Team Members', value: counters.members, suffix: '+', color: 'green' },
              { label: 'Projects Completed', value: counters.projects, suffix: '+', color: 'purple' },
              { label: 'Happy Clients', value: counters.clients, suffix: '+', color: 'orange' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  stat.color === 'blue' ? 'text-blue-400' :
                  stat.color === 'green' ? 'text-green-400' :
                  stat.color === 'purple' ? 'text-purple-400' :
                  'text-orange-400'
                }`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="text-blue-400">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 text-center group cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => {
                  trackServiceInquiry(service.title)
                }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{service.description}</p>
                <Link 
                  href={service.href}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium text-sm md:text-base"
                >
                  Learn More <FaArrowRight className="inline ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose <span className="text-blue-400">Samurai Tech Park</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver excellence through innovation, expertise, and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
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
              Ready to Start Your <span className="text-blue-400">Project</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-neon px-8 py-4 text-lg">
                <FaEnvelope className="mr-2" />
                <span>Get Quote</span>
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'cta_section')
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

export default HomePage