
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-cyber-cyan cyber-glow font-mono text-xl font-bold tracking-widest mb-4 md:mb-0"
          >
            Dev.Portfolio
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © 2025 Developer Portfolio. All rights reserved.
          </motion.div>
        </div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-green mt-6"
        />
      </div>
      
      {/* Grid background */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-pink/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
