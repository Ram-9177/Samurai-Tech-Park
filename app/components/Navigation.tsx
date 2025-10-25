'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaRocket, FaCode, FaUsers, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: FaRocket },
    { name: 'About', href: '/about', icon: FaUsers },
    { 
      name: 'Services', 
      icon: FaCode,
      dropdown: [
        { name: 'Automation Tools', href: '/automation-tools', icon: FaCode },
        { name: 'Software Services', href: '/software-services', icon: FaCode },
        { name: 'B.Tech Projects', href: '/btech-projects', icon: FaGraduationCap },
      ]
    },
    { name: 'Products', href: '/products', icon: FaProjectDiagram },
    { name: 'Careers', href: '/careers', icon: FaUsers },
    { name: 'Contact', href: '/contact', icon: FaEnvelope },
  ]

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-bg/95 backdrop-blur-md border-b border-gray-700 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg p-2">
              <div className="text-xs font-mono leading-tight text-center">
                <div className="text-black">samurai</div>
                <div className="text-orange-500 font-bold">tech</div>
                <div className="text-black">park</div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Samurai Tech Park
              </span>
              <span className="text-xs text-gray-400 -mt-1">Innovation Hub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 group"
                    >
                      <item.icon className="text-sm" />
                      <span>{item.name}</span>
                      <FaChevronDown className={`text-xs transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-dark-card border border-gray-700 rounded-xl shadow-xl overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <dropdownItem.icon className="text-sm text-blue-400" />
                              <div>
                                <div className="font-medium">{dropdownItem.name}</div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 group"
                  >
                    <item.icon className="text-sm" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-card border border-gray-700 rounded-lg mt-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="text-sm" />
                            <span>{item.name}</span>
                          </div>
                          <FaChevronDown className={`text-xs transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 space-y-1"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setActiveDropdown(null)
                                  }}
                                >
                                  <dropdownItem.icon className="text-sm text-blue-400" />
                                  <span>{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="text-sm" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-2 border-t border-gray-700">
                  <Link
                    href="/contact"
                    className="block w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation