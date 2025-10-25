'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaRocket, FaCode, FaUsers, FaProjectDiagram, FaArrowRight, FaPlay, FaDownload, FaStar, FaCheckCircle, FaCog, FaBrain, FaDatabase, FaCloud, FaMobile, FaDesktop, FaServer, FaShieldAlt, FaChartLine, FaLightbulb, FaHandshake, FaAward, FaGlobe, FaFilter, FaSearch, FaGraduationCap, FaEnvelope, FaBook, FaLaptop, FaShoppingCart, FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa'

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const departments = [
    { id: 'all', name: 'All Positions', icon: FaRocket, color: 'text-electric-blue' },
    { id: 'engineering', name: 'Engineering', icon: FaCode, color: 'text-hot-pink' },
    { id: 'design', name: 'Design', icon: FaDesktop, color: 'text-neon-green' },
    { id: 'marketing', name: 'Marketing', icon: FaChartLine, color: 'text-neon-purple' },
    { id: 'sales', name: 'Sales', icon: FaHandshake, color: 'text-electric-blue' },
    { id: 'support', name: 'Support', icon: FaUsers, color: 'text-hot-pink' }
  ]

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Tenali, AP',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for an experienced full-stack developer to join our engineering team.',
      requirements: [
        'Proficiency in React, Node.js, and MongoDB',
        'Experience with cloud platforms (AWS/Azure)',
        'Strong problem-solving skills',
        'Experience with agile development'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Remote work'],
      salary: '₹8-12 LPA',
      posted: '2 days ago',
      applicants: 45
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Hybrid / Tenali, AP',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create beautiful and intuitive user experiences for our products.',
      requirements: [
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio of UI/UX work',
        'Understanding of design systems',
        'Experience with user research'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Learning budget', 'Creative freedom'],
      salary: '₹6-9 LPA',
      posted: '1 week ago',
      applicants: 32
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Drive our digital marketing initiatives and grow our online presence.',
      requirements: [
        'Experience with SEO, SEM, and social media',
        'Analytics and reporting skills',
        'Content creation abilities',
        'Marketing automation tools'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Performance bonuses', 'Remote work'],
      salary: '₹5-8 LPA',
      posted: '3 days ago',
      applicants: 28
    },
    {
      id: 4,
      title: 'Sales Executive',
      department: 'sales',
      location: 'Tenali, AP',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Build relationships with clients and drive sales growth.',
      requirements: [
        'Strong communication skills',
        'Sales experience in tech industry',
        'CRM software knowledge',
        'Goal-oriented mindset'
      ],
      benefits: ['Competitive salary', 'Commission structure', 'Health insurance', 'Career growth'],
      salary: '₹4-7 LPA + Commission',
      posted: '5 days ago',
      applicants: 18
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Manage our infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Docker, Kubernetes',
        'CI/CD pipeline management',
        'Cloud platform expertise',
        'Monitoring and logging tools'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Latest tools'],
      salary: '₹10-15 LPA',
      posted: '1 week ago',
      applicants: 22
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'support',
      location: 'Hybrid / Tenali, AP',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Ensure customer satisfaction and drive product adoption.',
      requirements: [
        'Customer service experience',
        'Technical problem-solving skills',
        'Communication and empathy',
        'CRM and support tools'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Customer interaction', 'Growth opportunities'],
      salary: '₹5-8 LPA',
      posted: '4 days ago',
      applicants: 15
    }
  ]

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment)

  const companyCulture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and innovative solutions',
      icon: FaLightbulb,
      color: 'text-electric-blue'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options for all employees',
      icon: FaClock,
      color: 'text-hot-pink'
    },
    {
      title: 'Continuous Learning',
      description: 'Regular training sessions and skill development programs',
      icon: FaGraduationCap,
      color: 'text-neon-green'
    },
    {
      title: 'Team Collaboration',
      description: 'Open communication and collaborative work environment',
      icon: FaUsers,
      color: 'text-neon-purple'
    }
  ]

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: FaShieldAlt,
      color: 'from-electric-blue to-cyber-blue'
    },
    {
      title: 'Learning & Development',
      description: 'Training budget and professional development opportunities',
      icon: FaBook,
      color: 'from-hot-pink to-cyber-pink'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible working hours',
      icon: FaLaptop,
      color: 'from-neon-green to-cyber-green'
    },
    {
      title: 'Career Growth',
      description: 'Clear career progression paths and growth opportunities',
      icon: FaRocket,
      color: 'from-neon-purple to-cyber-purple'
    }
  ]

  const applicationProcess = [
    {
      step: '01',
      title: 'Apply Online',
      description: 'Submit your application with resume and portfolio',
      icon: FaEnvelope,
      color: 'text-electric-blue'
    },
    {
      step: '02',
      title: 'Initial Screening',
      description: 'Phone/video interview with HR team',
      icon: FaUsers,
      color: 'text-hot-pink'
    },
    {
      step: '03',
      title: 'Technical Interview',
      description: 'Technical assessment and coding challenge',
      icon: FaCode,
      color: 'text-neon-green'
    },
    {
      step: '04',
      title: 'Final Interview',
      description: 'Meet with team leads and company leadership',
      icon: FaHandshake,
      color: 'text-neon-purple'
    },
    {
      step: '05',
      title: 'Offer & Onboarding',
      description: 'Receive offer and begin your journey with us',
      icon: FaAward,
      color: 'text-electric-blue'
    }
  ]

  const teamBuildingActivities = [
    {
      title: 'Monthly Team Outings',
      description: 'Fun activities and team building exercises',
      icon: FaUsers,
      color: 'text-electric-blue'
    },
    {
      title: 'Hackathons',
      description: 'Regular coding competitions and innovation challenges',
      icon: FaCode,
      color: 'text-hot-pink'
    },
    {
      title: 'Learning Sessions',
      description: 'Knowledge sharing sessions and tech talks',
      icon: FaBook,
      color: 'text-neon-green'
    },
    {
      title: 'Company Retreats',
      description: 'Annual company retreats and team bonding',
      icon: FaGlobe,
      color: 'text-neon-purple'
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
              <FaBriefcase className="text-orange-400 text-sm mr-2" />
              <span className="text-sm font-medium text-white">Join Our Team</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="text-blue-400">Careers</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Join our team of innovators and help us build the future of technology. We're looking for passionate individuals to grow with us.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="btn-neon flex items-center justify-center px-8 py-4 text-lg">
                <FaBriefcase className="mr-2 text-blue-400" />
                View Open Positions
                <FaArrowRight className="ml-2 text-blue-400" />
              </button>
              <button className="btn-neon border-green-400 text-green-400 hover:bg-green-400 hover:text-white flex items-center justify-center px-8 py-4 text-lg">
                <FaEnvelope className="mr-2" />
                Send Resume
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 bg-dark-bg">
        <div className="container-dark">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">
              <span className="text-electric-blue glow-text">Open Positions</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setSelectedDepartment(department.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
                  selectedDepartment === department.id
                    ? 'border-electric-blue bg-electric-blue/10 text-electric-blue neon-border'
                    : 'border-gray-700 bg-dark-card text-gray-300 hover:border-electric-blue hover:text-electric-blue'
                }`}
              >
                <department.icon className={`text-sm ${department.color}`} />
                <span className="font-medium">{department.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-dark-bg">
        <div className="container-dark">
          <div className="space-y-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-neon">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                            <div className="flex items-center space-x-1">
                              <FaMapMarkerAlt className="text-electric-blue" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaBriefcase className="text-hot-pink" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaClock className="text-neon-green" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-electric-blue mb-1">{job.salary}</div>
                          <div className="text-sm text-gray-400">{job.posted}</div>
                          <div className="text-sm text-gray-400">{job.applicants} applicants</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-400">
                                <FaCheckCircle className="text-neon-green text-xs mt-1" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-400">
                                <FaCheckCircle className="text-electric-blue text-xs mt-1" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:ml-8 lg:min-w-[200px]">
                      <button className="w-full btn-neon mb-3">
                        <FaEnvelope className="mr-2" />
                        <span>Apply Now</span>
                      </button>
                      <button className="w-full btn-neon border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-dark-bg">
                        <FaBook className="mr-2" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-dark">
        <div className="container-dark">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
              <span className="text-electric-blue glow-text">Our Culture</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What makes working at Samurai Tech Park special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyCulture.map((culture, index) => (
              <motion.div
                key={culture.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="card-neon">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-electric-blue to-cyber-blue rounded-xl flex items-center justify-center neon-border group-hover:scale-110 transition-transform duration-300`}>
                    <culture.icon className="text-2xl text-dark-bg" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{culture.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{culture.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-dark-bg">
        <div className="container-dark">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
              <span className="text-electric-blue glow-text">Employee Benefits</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive benefits to support our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="card-neon">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center neon-border group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-2xl text-dark-bg" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-dark">
        <div className="container-dark">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
              <span className="text-electric-blue glow-text">Application Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our streamlined hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="card-neon">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-electric-blue to-cyber-blue rounded-2xl flex items-center justify-center neon-border group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="text-2xl text-dark-bg" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark-card border border-electric-blue rounded-full flex items-center justify-center">
                      <span className="text-electric-blue font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Building Activities */}
      <section className="py-24 bg-dark-bg">
        <div className="container-dark">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
              <span className="text-electric-blue glow-text">Team Building</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Fun activities and team bonding experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamBuildingActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="card-neon">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-electric-blue to-cyber-blue rounded-xl flex items-center justify-center neon-border group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon className="text-2xl text-dark-bg" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{activity.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-blue/20 via-hot-pink/20 to-neon-green/20">
        <div className="container-dark text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-orbitron">
              <span className="gradient-text-neon">Ready to Join Our Team?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't see a position that matches your skills? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-neon">
                <FaEnvelope className="mr-2" />
                <span>Send Resume</span>
              </button>
              <button className="btn-neon border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg">
                <span>View All Positions</span>
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage