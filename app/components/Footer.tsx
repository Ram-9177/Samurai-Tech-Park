'use client'

import Link from 'next/link'
import { FaRocket, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaUsers, FaProjectDiagram, FaGraduationCap } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Automation Tools', href: '/automation-tools' },
      { name: 'Software Development', href: '/software-services' },
      { name: 'B.Tech Projects', href: '/btech-projects' },
      { name: 'Products', href: '/products' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Support', href: '/contact' },
    ],
  }

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: FaGithub, color: 'text-gray-400 hover:text-white' },
    { name: 'LinkedIn', href: '#', icon: FaLinkedin, color: 'text-gray-400 hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: FaTwitter, color: 'text-gray-400 hover:text-pink-400' },
    { name: 'Email', href: 'mailto:sriram.polakam@gmail.com', icon: FaEnvelope, color: 'text-gray-400 hover:text-blue-400' },
  ]

  return (
    <footer className="bg-dark-section border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
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
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded by Sri Ram in Tenali, Andhra Pradesh, India. We specialize in automation tools, 
              software development, and B.Tech projects, delivering cutting-edge solutions 
              that drive innovation and empower the next generation of Indian technologists.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Tenali, Andhra Pradesh, India 🇮🇳</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-blue-400" />
                <a href="tel:+919177903061" className="hover:text-blue-400 transition-colors duration-300">+91 91779 03061</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:sriram.polakam@gmail.com" className="hover:text-blue-400 transition-colors duration-300">sriram.polakam@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="text-green-400 text-lg">📱</span>
                <a href="https://wa.me/9177903061" className="hover:text-green-400 transition-colors duration-300">WhatsApp: +91 91779 03061</a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              <span className="text-blue-400">Company</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              <span className="text-pink-400">Services</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              <span className="text-green-400">Resources</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Samurai Tech Park. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer