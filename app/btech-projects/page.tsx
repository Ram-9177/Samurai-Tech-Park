'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGraduationCap, FaCode, FaRocket, FaPlay, FaDownload, FaEnvelope, FaArrowRight, FaCheckCircle, FaLightbulb, FaHandshake, FaAward, FaGlobe, FaDatabase, FaCloud, FaMobile, FaDesktop, FaShieldAlt, FaChartLine, FaCog, FaRobot } from 'react-icons/fa'
import { openWhatsApp, trackLeadConversion, trackProjectInquiry } from '../utils/whatsapp'

const BTechProjectsPage = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      icon: FaDesktop,
      color: 'from-blue-500 to-blue-600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      price: '₹15,000',
      duration: '4-6 weeks',
      features: ['User Authentication', 'Product Management', 'Payment Gateway', 'Order Tracking']
    },
    {
      title: 'IoT Home Automation',
      description: 'Smart home system with mobile app control and sensor integration',
      icon: FaMobile,
      color: 'from-green-500 to-green-600',
      technologies: ['Arduino', 'React Native', 'Firebase', 'MQTT'],
      price: '₹12,000',
      duration: '3-5 weeks',
      features: ['Device Control', 'Real-time Monitoring', 'Automation Rules', 'Mobile App']
    },
    {
      title: 'AI Chatbot System',
      description: 'Intelligent chatbot with natural language processing capabilities',
      icon: FaRobot,
      color: 'from-purple-500 to-purple-600',
      technologies: ['Python', 'TensorFlow', 'Flask', 'NLTK'],
      price: '₹18,000',
      duration: '5-7 weeks',
      features: ['NLP Processing', 'Intent Recognition', 'Response Generation', 'Learning System']
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure voting platform using blockchain technology for transparency',
      icon: FaShieldAlt,
      color: 'from-orange-500 to-orange-600',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      price: '₹20,000',
      duration: '6-8 weeks',
      features: ['Smart Contracts', 'Vote Encryption', 'Result Verification', 'Audit Trail']
    },
    {
      title: 'Machine Learning Predictor',
      description: 'ML model for predictive analytics with data visualization dashboard',
      icon: FaChartLine,
      color: 'from-red-500 to-red-600',
      technologies: ['Python', 'Scikit-learn', 'Django', 'Chart.js'],
      price: '₹16,000',
      duration: '4-6 weeks',
      features: ['Data Preprocessing', 'Model Training', 'Prediction API', 'Visualization']
    },
    {
      title: 'Cloud Storage System',
      description: 'Secure cloud storage with file sharing and collaboration features',
      icon: FaCloud,
      color: 'from-indigo-500 to-indigo-600',
      technologies: ['AWS S3', 'React', 'Node.js', 'PostgreSQL'],
      price: '₹14,000',
      duration: '4-5 weeks',
      features: ['File Upload', 'Sharing Links', 'Version Control', 'Access Management']
    }
  ]

  const packages = [
    {
      name: 'Basic Package',
      price: '₹8,000',
      description: 'Perfect for simple projects and learning',
      features: [
        'Basic Documentation',
        'Source Code',
        'Installation Guide',
        'Email Support'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Standard Package',
      price: '₹12,000',
      description: 'Most popular choice for comprehensive projects',
      features: [
        'Complete Documentation',
        'Source Code + Comments',
        'Video Tutorial',
        'WhatsApp Support',
        'Minor Modifications'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Premium Package',
      price: '₹18,000',
      description: 'Full-service solution with ongoing support',
      features: [
        'Detailed Documentation',
        'Commented Source Code',
        'Video Tutorial',
        '1-on-1 Session',
        'Unlimited Modifications',
        'Deployment Support'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const technologies = [
    { name: 'React', category: 'Frontend', color: 'text-blue-400' },
    { name: 'Node.js', category: 'Backend', color: 'text-green-400' },
    { name: 'Python', category: 'Language', color: 'text-purple-400' },
    { name: 'MongoDB', category: 'Database', color: 'text-orange-400' },
    { name: 'AWS', category: 'Cloud', color: 'text-orange-400' },
    { name: 'TensorFlow', category: 'AI/ML', color: 'text-indigo-400' },
    { name: 'Arduino', category: 'IoT', color: 'text-indigo-400' },
    { name: 'Blockchain', category: 'Crypto', color: 'text-red-400' }
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
              <FaGraduationCap className="text-orange-400 text-sm mr-2" />
              <span className="text-sm font-medium text-white">B.Tech Projects</span>
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
                  B.Tech Projects
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Complete engineering projects with documentation, source code, and implementation support for your academic success.
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
                View Projects
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/contact" className="btn-neon flex items-center justify-center px-8 py-4 text-lg">
                <FaEnvelope className="mr-2" />
                Get Quote
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'btech_hero')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg"
              >
                <span className="mr-2">📱</span>
                WhatsApp
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
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
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Complete engineering projects with full documentation and support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-neon p-6 md:p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <project.icon className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base text-center">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Technologies:</span>
                    <span className="text-sm text-blue-400">{project.technologies.join(', ')}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Duration:</span>
                    <span className="text-sm text-green-400">{project.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Price:</span>
                    <span className="text-lg font-bold text-orange-400">{project.price}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      trackProjectInquiry(project.title)
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

      {/* Packages */}
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
              Project <span className="text-blue-400">Packages</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-neon p-6 md:p-8 text-center group hover:scale-105 transition-all duration-300 ${
                  index === 1 ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <FaAward className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                <p className="text-gray-400 mb-6 text-sm md:text-base">{pkg.description}</p>
                
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className={`w-full btn-neon py-3 ${
                    index === 1 ? 'bg-blue-400 text-white' : ''
                  }`}
                >
                  <FaEnvelope className="mr-2" />
                  Choose Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
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
              Technologies <span className="text-blue-400">We Use</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Modern technologies and frameworks for cutting-edge projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
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
              Ready to Start Your <span className="text-blue-400">Project</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Get a complete B.Tech project with documentation, source code, and implementation support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-neon px-8 py-4 text-lg">
                <FaEnvelope className="mr-2" />
                <span>Get Quote</span>
              </Link>
              <button 
                onClick={() => {
                  trackLeadConversion('whatsapp_button', 'btech_cta')
                  openWhatsApp()
                }}
                className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg"
              >
                <span className="mr-2">📱</span>
                <span>WhatsApp</span>
              </button>
              <Link href="/contact" className="btn-neon border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white px-8 py-4 text-lg">
                <span>View Projects</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BTechProjectsPage