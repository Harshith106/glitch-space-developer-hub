
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import FrameworksSection from '../components/FrameworksSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Background3D from '../components/Background3D';

const Index = () => {
  useEffect(() => {
    // Add custom styles for HTML and body for this page
    document.documentElement.classList.add('scroll-smooth');
    document.body.classList.add('cyber-theme');
    
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
      document.body.classList.remove('cyber-theme');
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Background3D />
      <NavBar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <EducationSection />
        <FrameworksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
