import { useState, useEffect } from 'react';

const NAV_LINKS = ['Home', 'About', 'Education', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    if (link === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.getElementById(link.toLowerCase());
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 px-4 sm:px-6 md:px-10 ${scrolled
          ? 'py-3.5 sm:py-4 bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-4 sm:pt-6 bg-transparent'
        }`}
    >
      <div className="w-full flex items-center justify-center">
        <nav className="flex items-center justify-between w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:text-white hover:opacity-100 opacity-85 transition-all duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
