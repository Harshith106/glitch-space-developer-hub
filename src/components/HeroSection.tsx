import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { FileText } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection = () => {
  const hologramRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!hologramRef.current) return;
    
    // Create hologram effect with Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(300, 300);
    hologramRef.current.appendChild(renderer.domElement);
    
    // Create holographic effect
    const geometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x1EAEDB,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const hologramMesh = new THREE.Mesh(geometry, material);
    scene.add(hologramMesh);
    
    camera.position.z = 15;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      hologramMesh.rotation.x += 0.01;
      hologramMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    
    // Clean up
    return () => {
      renderer.dispose();
      if (hologramRef.current && hologramRef.current.contains(renderer.domElement)) {
        hologramRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="cyber-title text-cyber-cyan"
                animate={{ textShadow: ["0 0 7px #1EAEDB", "0 0 10px #1EAEDB", "0 0 7px #1EAEDB"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                P.Harshith<br />
                
              </motion.h1>
              <p className="cyber-subtitle text-cyber-pink mt-2 cyber-glow-text-pink">
                Full Stack Developer & UI/UX Designer
              </p>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 max-w-lg"
              variants={itemVariants}
            >
              Building cutting-edge web applications with modern 
              technologies and futuristic design aesthetics.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="inline-block">
                <button className="cyber-button border-cyber-cyan text-cyber-cyan hover-glow-cyan cyber-corners">
                  <span>HIRE ME NOW</span>
                </button>
              </a>
              
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="cyber-button border-cyber-pink text-cyber-pink hover-glow-pink cyber-corners flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>VIEW RESUME</span>
                </button>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative flex justify-end items-center"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 1, 
                ease: "easeOut" 
              }
            }}
            whileInView={{ y: [20, 0] }}
          >
            <div className="w-full max-w-[32rem] pr-0">
              <AspectRatio
                ratio={1/1}
                className="overflow-hidden flex justify-center items-center"
              >
                <motion.img 
                  src="/myImage.png" 
                  alt="P.Harshith Profile" 
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                />
              </AspectRatio>
            </div>
            
            <motion.div 
              className="absolute -top-10 -right-5 md:-right-10 w-32 md:w-40 h-32 md:h-40 border border-cyber-cyan opacity-20"
              animate={{ 
                rotate: [0, 90],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-10 right-5 md:-left-10 w-32 md:w-40 h-32 md:h-40 border border-cyber-pink opacity-20"
              animate={{ 
                rotate: [0, -90],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cyber-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
