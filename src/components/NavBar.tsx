
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#frameworks' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 
        ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-cyber-cyan cyber-glow font-mono text-xl font-bold tracking-widest">
            P.Harshith
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium hover:text-cyber-cyan transition duration-300 
                hover:cyber-glow-text-cyan relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyber-cyan 
                group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button */}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
