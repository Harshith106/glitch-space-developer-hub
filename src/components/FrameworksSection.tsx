
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Framework {
  name: string;
  icon: string; // Using placeholders - in real implementation these would be imported or URLs
  color: string;
}

const FrameworksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const frameworks: Framework[] = [
    { name: 'React', icon: 'R', color: '#61DAFB' },
    { name: 'Node.js', icon: 'N', color: '#3C873A' },
    { name: 'Three.js', icon: 'T', color: '#049EF4' },
    { name: 'MongoDB', icon: 'M', color: '#13AA52' },
    { name: 'TypeScript', icon: 'TS', color: '#007ACC' },
    { name: 'Vue.js', icon: 'V', color: '#42B883' },
    { name: 'Angular', icon: 'A', color: '#DD0031' },
    { name: 'Next.js', icon: 'N', color: '#000000' },
  ];
  
  // refs for each cube
  const cubeRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    cubeRefs.current = cubeRefs.current.slice(0, frameworks.length);
  }, [frameworks.length]);

  return (
    <section id="frameworks" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="heading-extended-line"
        >
          <h2 className="text-4xl font-bold text-cyber-pink cyber-glow-text-pink heading-diagonal">
            <span className="text-5xl">&lt;</span>
            Frameworks & Libraries
            <span className="text-5xl">/&gt;</span>
          </h2>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, rotateY: 0 }}
              animate={isInView ? { 
                y: 0, 
                opacity: 1, 
                rotateY: 0 
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 80 
              }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 180, 
                transition: { duration: 0.8 }
              }}
              className="framework-cube perspective-700 relative h-40 cyber-corners"
            >
              <div 
                ref={el => cubeRefs.current[index] = el}
                className="w-full h-full relative transition-transform duration-1000 transform-style-3d"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Front face */}
                <div 
                  className="absolute inset-0 flex items-center justify-center cyber-panel border-cyber-cyan backface-hidden hover-glow-cyan"
                  style={{ 
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mb-3 cyber-corners"
                      style={{ 
                        backgroundColor: framework.color + '22',
                        color: framework.color,
                        border: `2px solid ${framework.color}`,
                        boxShadow: `0 0 10px ${framework.color}80`
                      }}
                    >
                      {framework.icon}
                    </div>
                    <p className="text-center text-lg font-semibold text-white">{framework.name}</p>
                  </div>
                </div>
                
                {/* Back face */}
                <div 
                  className="absolute inset-0 flex items-center justify-center cyber-panel border-cyber-pink backface-hidden hover-glow-pink"
                  style={{ 
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-bold text-cyber-pink mb-2">{framework.name}</h4>
                    <p className="text-sm text-gray-300">
                      Expert-level proficiency.
                      <br />Click to learn more.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Grid decorations */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyber-pink to-transparent"></div>
    </section>
  );
};

export default FrameworksSection;
