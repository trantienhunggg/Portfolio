import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

function MediaItem({ src, alt, className }: { src: string; alt: string; className: string }) {
  if (src.endsWith('.mp4')) {
    return (
      <video
        src={src}
        className={className}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  return <img src={src} alt={alt} className={className} />;
}

interface ProjectData {
  number: string;
  category: string;
  name: string;
  col1Img1: string;
  col1Img2: string;
  col1Img3?: string;
  col2Img: string;
  description?: string;
  link?: string;
}

import loginImg from '../assets/login_page1.png';
import lecturerImg from '../assets/lectuer_management.png';
import exportImg from '../assets/export_file.png';
import multiSearchImg from '../assets/multilsearch.png';

import changeLangImg from '../assets/change_language.png';
import footerVid from '../assets/footter.mp4';
import mapVid from '../assets/map.mp4';
import multiSearch2Img from '../assets/multi_search2.png';

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'University Project',
    name: 'Capstone Defense Scheduler',
    description: 'A comprehensive system for scheduling graduation defense rounds. Features include bulk data import/export via templates, advanced multi-criteria search for efficient data management, and automated PDF report generation.',
    col1Img1: multiSearchImg,
    col1Img2: lecturerImg,
    col1Img3: exportImg,
    col2Img: loginImg,
  },
  {
    number: '02',
    category: 'Freelance',
    name: 'Genie Global Workforce',
    description: 'A corporate website built for a German-standard recruitment and training agency. I developed the Front-End, featuring a multilingual interface (static data localization) and dynamic media elements like video backgrounds.',
    link: 'https://genieglobal-workforce.com/',
    col1Img1: changeLangImg,
    col1Img2: mapVid,
    col1Img3: multiSearch2Img,
    col2Img: footerVid,
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: ProjectData;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[100vh] md:h-[110vh]" style={{ position: 'relative' }}>
      <motion.div
        className="sticky top-24 md:top-32 origin-top"
        style={{
          scale,
          top: `calc(96px + ${index * 28}px)`,
        }}
      >
        <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8">
          {/* Top Row */}
          <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8 flex-wrap gap-4">
            <div className="flex items-start gap-4 sm:gap-6 md:gap-10">
              {/* Number */}
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>

              <div className="flex flex-col gap-1 pt-2 sm:pt-4">
                <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest font-light">
                  {project.category}
                </span>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
                {project.description && (
                  <div className="mt-2 max-w-xl">
                    <p className={`text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg font-light transition-all ${isDescExpanded ? '' : 'line-clamp-2'}`}>
                      {project.description}
                    </p>
                    <button 
                      onClick={() => setIsDescExpanded(!isDescExpanded)}
                      className="text-[#D7E2EA] text-xs sm:text-sm mt-1 opacity-70 hover:opacity-100 flex items-center gap-1 transition-opacity"
                    >
                      {isDescExpanded ? 'Show less' : 'Read more'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`w-4 h-4 transition-transform duration-300 ${isDescExpanded ? 'rotate-180' : ''}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <LiveProjectButton href={project.link} />
          </div>

          {/* Image Grid */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 h-[40vh] sm:h-[50vh] md:h-[60vh]">
            {/* Top Row - up to 3 images */}
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 h-[50%]">
              <div
                className="flex-1 overflow-hidden bg-transparent rounded-[20px] sm:rounded-[30px] p-2 sm:p-4 flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => setSelectedImage(project.col1Img1)}
              >
                <MediaItem
                  src={project.col1Img1}
                  alt={`${project.name} preview 1`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className="flex-1 overflow-hidden bg-transparent rounded-[20px] sm:rounded-[30px] p-2 sm:p-4 flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => setSelectedImage(project.col1Img2)}
              >
                <MediaItem
                  src={project.col1Img2}
                  alt={`${project.name} preview 2`}
                  className="w-full h-full object-contain"
                />
              </div>
              {project.col1Img3 && (
                <div
                  className="flex-1 overflow-hidden bg-transparent rounded-[20px] sm:rounded-[30px] p-2 sm:p-4 flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform"
                  onClick={() => setSelectedImage(project.col1Img3!)}
                >
                  <MediaItem
                    src={project.col1Img3}
                    alt={`${project.name} preview 3`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Bottom Row - 1 image */}
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 h-[50%]">
              <div
                className="flex-1 overflow-hidden bg-transparent rounded-[20px] sm:rounded-[30px] p-2 sm:p-4 flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => setSelectedImage(project.col2Img)}
              >
                <MediaItem
                  src={project.col2Img}
                  alt={`${project.name} main`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-white/40 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <MediaItem
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
