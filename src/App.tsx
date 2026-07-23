import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTopButton />
      <Analytics />
    </div>
  );
}
