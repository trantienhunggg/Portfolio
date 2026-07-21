import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact'];

import avatar3D from '../assets/avatar_3d.png';

const PORTRAIT_URL = avatar3D;

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative pt-0 md:pt-0"
      style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="absolute top-0 left-0 w-full flex justify-center sm:justify-between px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 z-50 gap-3 sm:gap-0 flex-wrap">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="relative z-20">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-[1.1] w-full text-[8vw] sm:text-[5vw] md:text-[5vw] lg:text-[5vw] mt-20 sm:mt-32 md:mt-40 text-center py-4 px-2">
          Hi, i&apos;m Trần Tiến Hùng
        </h1>
      </FadeIn>

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[220px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={PORTRAIT_URL}
            alt="Jack portrait"
            className="w-full h-auto object-cover"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="mt-auto flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 pb-5 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light tracking-wide leading-relaxed max-w-[280px] sm:max-w-[360px] md:max-w-[480px] text-center sm:text-left"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Web Developer passionate about building modern web applications with React, Spring Boot, PostgreSQL, and Docker.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
