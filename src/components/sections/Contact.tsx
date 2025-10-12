import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: 'Website',
      value: 'FinancialToolsAI',
      href: personalInfo.socialLinks.website,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: personalInfo.socialLinks.github,
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: personalInfo.socialLinks.linkedin,
      color: 'hover:text-blue-400'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="pt-8 pb-2 bg-gradient-to-br from-cosmic-dark via-cosmic-primary to-cosmic-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-cosmic-muted max-w-3xl mx-auto">
              I'm always excited to collaborate on innovative projects, discuss opportunities, 
              or simply connect with fellow technologists and innovators.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cosmic-dark/40 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} p-4 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-cosmic-text mb-2 group-hover:text-cosmic-accent transition-colors">
                  {method.label}
                </h3>
                <p className="text-cosmic-muted text-sm">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-cosmic-text mb-4">
                  Send a Message
                </h3>
                <p className="text-cosmic-muted">
                  Have a project in mind or want to discuss opportunities? I'd love to hear from you!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cosmic-text mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-cosmic-muted" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-cosmic-dark/50 border border-cosmic-secondary/30 rounded-xl text-cosmic-text placeholder-cosmic-muted focus:border-cosmic-accent focus:ring-2 focus:ring-cosmic-accent/20 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cosmic-text mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-cosmic-muted" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-cosmic-dark/50 border border-cosmic-secondary/30 rounded-xl text-cosmic-text placeholder-cosmic-muted focus:border-cosmic-accent focus:ring-2 focus:ring-cosmic-accent/20 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cosmic-text mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-dark/50 border border-cosmic-secondary/30 rounded-xl text-cosmic-text placeholder-cosmic-muted focus:border-cosmic-accent focus:ring-2 focus:ring-cosmic-accent/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cosmic-text mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-cosmic-muted" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-cosmic-dark/50 border border-cosmic-secondary/30 rounded-xl text-cosmic-text placeholder-cosmic-muted focus:border-cosmic-accent focus:ring-2 focus:ring-cosmic-accent/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                  icon={isSubmitting ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-5 h-5" />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg p-4"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Resume & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Social Links */}
              <div className="bg-cosmic-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-secondary/20">
                <h3 className="text-2xl font-bold text-cosmic-text mb-4">
                  Connect on Social
                </h3>
                <p className="text-cosmic-muted mb-6">
                  Follow my journey and stay updated with my latest projects and achievements.
                </p>
                
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 bg-cosmic-secondary/20 rounded-xl text-cosmic-text ${link.color} transition-all duration-300 hover:scale-105`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>


            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-cosmic-accent/10 to-cosmic-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-accent/20">
              <h3 className="text-2xl font-bold text-cosmic-text mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-cosmic-muted mb-6 max-w-2xl mx-auto">
                Whether you're a recruiter, fellow developer, or someone with an exciting project idea, 
                I'm always open to new opportunities and collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  icon={<Linkedin className="w-5 h-5" />}
                  className="hover:scale-105 transition-transform"
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 