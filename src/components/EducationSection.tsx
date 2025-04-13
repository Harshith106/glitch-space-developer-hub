
import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Education {
  degree: string;
  institution: string;
  years: string;
  details: string;
  color: string;
}

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  const educationData: Education[] = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      years: "2020 - 2022",
      details: "Specialized in artificial intelligence and machine learning.",
      color: "from-cyber-cyan/70 to-cyber-cyan/20"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Digital Institute",
      years: "2016 - 2020",
      details: "Focus on software engineering and web development.",
      color: "from-cyber-purple/70 to-cyber-purple/20"
    },
    {
      degree: "Full Stack Web Development",
      institution: "Code Academy",
      years: "2015",
      details: "Intensive bootcamp covering modern web technologies.",
      color: "from-cyber-pink/70 to-cyber-pink/20"
    },
    {
      degree: "High School Diploma",
      institution: "Science High School",
      years: "2012 - 2016",
      details: "Advanced courses in mathematics and computer science.",
      color: "from-cyber-green/70 to-cyber-green/20"
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateY: 25, z: -100 },
    visible: (i: number) => ({ 
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: { 
        duration: 0.8, 
        delay: i * 0.2,
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    })
  };

  return (
    <section id="education" ref={sectionRef} className="py-20 relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-4xl font-bold text-cyber-purple cyber-glow mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl">&lt;</span>
          Education
          <span className="text-5xl">/&gt;</span>
        </motion.h2>
        
        <motion.div 
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 perspective-1000"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="relative preserve-3d"
              custom={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.2 }
              }}
            >
              <div 
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 backdrop-blur-lg
                  border border-white/10 shadow-xl education-card`}
                style={{ 
                  boxShadow: `0 0 30px rgba(30, 174, 219, 0.15)`,
                  transform: 'translateZ(0px)'
                }}
              >
                {/* Glow effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-30 z-0"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    index === 0 ? 'text-cyber-cyan' : 
                    index === 1 ? 'text-cyber-purple' : 
                    index === 2 ? 'text-cyber-pink' : 
                    'text-cyber-green'
                  }`}>{item.degree}</h3>
                  
                  <div className="w-16 h-0.5 bg-white/30 my-3"></div>
                  
                  <div className="text-sm text-gray-300 mb-1">{item.years}</div>
                  <div className="text-base mb-4">{item.institution}</div>
                  <p className="text-sm text-gray-400">{item.details}</p>
                </div>
                
                {/* Inner edge light effect */}
                <div className="absolute inset-0 rounded-2xl border border-white/5"></div>
                
                {/* Shine effect */}
                <div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-50"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 50%)'
                  }}
                ></div>
              </div>
              
              {/* Reflection */}
              <div 
                className={`bg-gradient-to-b ${item.color} rounded-2xl p-6 mt-1 opacity-30 blur-sm`}
                style={{ 
                  transform: 'rotateX(180deg) translateZ(-2px) scale(0.95)',
                  height: '40%',
                  filter: 'blur(4px)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)'
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background grid effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4c9dcbcf-3f94-4624-a5cc-6c9717f9deca.png')] bg-cover opacity-20"></div>
      </div>
    </section>
  );
};

export default EducationSection;
