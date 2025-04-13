
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  color: string;
  tags: string[];
  link: string;
  liveLink?: string;
}

const ProjectsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const calculateTilt = (card: HTMLElement, mouseX: number, mouseY: number) => {
    const cardRect = card.getBoundingClientRect();
    const cardX = cardRect.left + cardRect.width / 2;
    const cardY = cardRect.top + cardRect.height / 2;
    
    const angleX = (mouseY - cardY) / 25;
    const angleY = (cardX - mouseX) / 25;
    
    return { angleX, angleY };
  };
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card) => {
        const { angleX, angleY } = calculateTilt(card as HTMLElement, e.clientX, e.clientY);
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
    };
    
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      title: 'Cyberpunk Dashboard',
      description: 'A next-generation data visualization and real-time monitoring system.',
      color: 'cyber-cyan',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      liveLink: '#'
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing neural networks and machine learning algorithms.',
      color: 'cyber-pink',
      tags: ['Three.js', 'React', 'TensorFlow.js'],
      link: '#',
      liveLink: '#'
    },
    {
      title: 'Crypto Trading Bot',
      description: 'A customized cryptocurrency trading bot with automatic performance optimization.',
      color: 'cyber-green',
      tags: ['Python', 'React', 'WebSockets'],
      link: '#',
      liveLink: '#'
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 relative">
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
            Projects
            <span className="text-5xl">/&gt;</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card cyber-corners p-6 rounded-lg 
                bg-black/70 backdrop-blur-sm h-full flex flex-col shadow-lg transition-transform 
                duration-300 hover:z-10 border border-${project.color} hover-glow-${project.color.split('-')[1]}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className={`text-2xl font-bold mb-3 text-${project.color} cyber-glow`}>
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="cyber-tag mr-2 mb-2 cyber-corners hover-glow-cyan">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3 mt-auto">
                <a href={project.link} className="cyber-button border-cyber-cyan text-cyber-cyan text-sm cyber-corners hover-glow-cyan">
                  VIEW REPO
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} className="cyber-button border-cyber-pink text-cyber-pink text-sm cyber-corners hover-glow-pink">
                    LIVE DEMO
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-cyber-pink opacity-10 rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-cyber-cyan opacity-10 rotate-45"></div>
    </section>
  );
};

export default ProjectsSection;
