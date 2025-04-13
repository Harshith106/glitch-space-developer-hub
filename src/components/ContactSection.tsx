
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github className="w-6 h-6" />, 
      url: 'https://github.com/',
      color: 'cyber-cyan'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-6 h-6" />, 
      url: 'https://linkedin.com/',
      color: 'cyber-green' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-6 h-6" />, 
      url: 'https://twitter.com/',
      color: 'cyber-pink'
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-6 h-6" />, 
      url: 'mailto:contact@example.com',
      color: 'cyber-purple' 
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="heading-extended-line"
        >
          <h2 className="text-4xl font-bold text-cyber-cyan cyber-glow-text-cyan heading-diagonal">
            <span className="text-5xl">&lt;</span>
            Contact Me
            <span className="text-5xl">/&gt;</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass p-8 rounded-lg border border-cyber-cyan cyber-corners hover-glow-cyan"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-cyber-cyan"
            >
              Send Me a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="cyber-input cyber-corners hover-glow-cyan"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="cyber-input cyber-corners hover-glow-cyan"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="cyber-input resize-none cyber-corners hover-glow-cyan"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cyber-button border-cyber-cyan text-cyber-cyan w-full cyber-corners ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover-glow-cyan'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                  
                  <span className="ml-2">
                    {isSubmitting && (
                      <svg className="animate-spin h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                  </span>
                </button>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-cyber-green/20 border border-cyber-green rounded text-center text-cyber-green cyber-corners hover-glow-green"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass p-8 rounded-lg border border-cyber-pink cyber-corners hover-glow-pink"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-cyber-pink"
            >
              Connect With Me
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 hover:bg-${link.color}/10 rounded-lg border border-${link.color}/30 transition-all duration-300 cyber-corners hover-glow-${link.color.split('-')[1]}`}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 text-${link.color}`}
                    style={{ border: `2px solid ${link.color === 'cyber-cyan' ? '#1EAEDB' : link.color === 'cyber-pink' ? '#D946EF' : link.color === 'cyber-green' ? '#32CD30' : '#9b87f5'}` }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {link.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{link.name}</h4>
                    <p className="text-sm text-gray-400">
                      {link.name === 'Email' ? 'contact@example.com' : `@username`}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <p className="text-gray-400 text-sm">
                Available for freelance projects and full-time positions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-20 right-40 w-40 h-40 border border-cyber-cyan opacity-5 rotate-45"
        animate={{
          rotate: [45, 90, 45],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 left-40 w-40 h-40 border border-cyber-pink opacity-5 rotate-45"
        animate={{
          rotate: [45, 0, 45],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};

export default ContactSection;
