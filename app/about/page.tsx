'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCode, FaUsers, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaPhone, FaMapMarkerAlt, FaAward, FaLightbulb, FaHandshake, FaGlobe, FaCog, FaBrain, FaDatabase, FaCloud, FaMobile, FaDesktop, FaServer, FaShieldAlt, FaChartLine, FaArrowRight } from 'react-icons/fa'
import { openWhatsApp, trackLeadConversion } from '../utils/whatsapp'

const AboutPage = () => {
  const timeline = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Samurai Tech Park was founded by Sri Ram in Tenali, Andhra Pradesh, with a vision to revolutionize technology education and automation.',
      icon: FaRocket,
      color: 'text-blue-400'
    },
    {
      year: '2022',
      title: 'First Projects',
      description: 'Launched our first automation tools and began offering B.Tech project solutions to engineering students across India.',
      icon: FaCode,
      color: 'text-green-400'
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Expanded our team to 30+ members and completed 100+ successful projects for clients worldwide.',
      icon: FaUsers,
      color: 'text-purple-400'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Introduced cutting-edge AI-powered automation tools and advanced software development services.',
      icon: FaBrain,
      color: 'text-orange-400'
    }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create groundbreaking solutions.',
      icon: FaLightbulb,
      color: 'text-blue-400'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: FaAward,
      color: 'text-green-400'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaborative problem-solving.',
      icon: FaHandshake,
      color: 'text-purple-400'
    },
    {
      title: 'Global Impact',
      description: 'We aim to make technology accessible and beneficial for people worldwide.',
      icon: FaGlobe,
      color: 'text-orange-400'
    }
  ]

  const team = [
    {
      name: 'Sri Ram',
      role: 'Founder & CEO',
      description: 'Visionary leader with 5+ years of experience in technology and automation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Tech Team',
      role: 'Development Team',
      description: 'Expert developers specializing in AI, automation, and software development.',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Project Team',
      role: 'Project Managers',
      description: 'Dedicated professionals ensuring successful project delivery and client satisfaction.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Committed to providing exceptional support and guidance to our clients.',
      color: 'from-orange-500 to-orange-600'
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
              <FaUsers className="text-orange-400 text-sm mr-2" />
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
                  About Samurai Tech Park
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Pioneering the future of technology through innovation, automation, and excellence.
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
                <FaEnvelope className="mr-2" />
                Get In Touch
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'about_hero')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg"
              >
                <span className="mr-2">📱</span>
                WhatsApp
              </button>
              <Link href="/automation-tools" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg">
                <FaArrowRight className="mr-2" />
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
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
              Our <span className="text-blue-400">Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              To democratize technology and make cutting-edge automation tools, software solutions, and educational resources accessible to everyone, from students to enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-neon p-6 md:p-8 text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaRocket className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400 text-sm md:text-base">Pushing the boundaries of what's possible with technology</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-neon p-6 md:p-8 text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaUsers className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Empowerment</h3>
              <p className="text-gray-400 text-sm md:text-base">Enabling individuals and businesses to achieve their goals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-neon p-6 md:p-8 text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaGlobe className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Global Impact</h3>
              <p className="text-gray-400 text-sm md:text-base">Making technology accessible worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="text-blue-400">Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to becoming a leading technology company
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500 to-blue-600' :
                    index === 1 ? 'from-green-500 to-green-600' :
                    index === 2 ? 'from-purple-500 to-purple-600' :
                    'from-orange-500 to-orange-600'
                  } rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <item.icon className="text-white text-2xl md:text-3xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <span className="text-2xl md:text-3xl font-bold text-blue-400">{item.year}</span>
                      <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="text-blue-400">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 ${
                  index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  index === 2 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  'bg-gradient-to-br from-orange-500 to-orange-600'
                } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Our <span className="text-blue-400">Team</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the passionate individuals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white text-xl md:text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 text-sm md:text-base mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm md:text-base">{member.description}</p>
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
              Ready to Work <span className="text-blue-400">With Us</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Let's collaborate and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-neon px-8 py-4 text-lg">
                <FaEnvelope className="mr-2" />
                <span>Get In Touch</span>
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'about_cta')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg"
              >
                <span className="mr-2">📱</span>
                <span>WhatsApp</span>
              </button>
              <Link href="/automation-tools" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white px-8 py-4 text-lg">
                <span>Our Services</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage