
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML5', 'CSS3', 
    'Python', 'ThreeJS', 'GraphQL', 'MongoDB', 'SQL', 'Docker'
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-cyber-green cyber-glow-text-green mb-12">
            <span className="text-5xl">&lt;</span>
            About Me
            <span className="text-5xl">/&gt;</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div 
            className="cyber-panel border-cyber-cyan p-6 rounded-lg cyber-corners hover-glow-cyan"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyber-cyan">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate full-stack developer with a focus on creating immersive digital
                experiences that blend cutting-edge technology with stunning visual design.
              </p>
              <p>
                My expertise in both frontend and backend development allows me to create
                responsive applications that deliver exceptional user experiences across all devices.
              </p>
              <p>
                My continuous learning mindset combined with creative problem-solving
                allows me to tackle complex challenges and transform ideas into reality.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="cyber-panel border-cyber-pink p-6 rounded-lg cyber-corners hover-glow-pink"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyber-pink">Technical Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="cyber-tag cyber-corners hover-glow-cyan"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + index * 0.05,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(30, 174, 219, 0.8)"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute hidden md:block top-0 right-20 w-32 h-32 border border-cyber-green opacity-10"
        animate={{ 
          y: [0, 15, 0], 
          rotate: [0, 5, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute hidden md:block bottom-10 left-10 w-24 h-24 border border-cyber-pink opacity-10"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, -5, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};

export default AboutSection;
