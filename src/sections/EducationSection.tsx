import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Software Engineering' | 'Management & Design' | 'General';
  link?: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'CertNexus Certified Ethical Emerging Technologist Professional Certificate',
    issuer: 'CertNexus',
    date: 'June 2026',
    category: 'Software Engineering',
    link: 'https://coursera.org/share/4abe6a7ea903f86b9733021bc48e081f',
  },
  {
    id: '2',
    title: 'Project Management Principles and Practices Specialization',
    issuer: 'UC Irvine',
    date: 'January 2026',
    category: 'Management & Design',
    link: 'https://coursera.org/share/abadf83f37bb77b0e1fc57b5fafea94b',
  },
  {
    id: '3',
    title: 'Entrepreneurship: Launching an Innovative Business Specialization',
    issuer: 'UMD College Park',
    date: 'January 2026',
    category: 'Management & Design',
    link: 'https://coursera.org/share/b1aceca6a9b2493b9709c58e80f01fe2',
  },
  {
    id: '4',
    title: 'User Experience Research and Design Specialization',
    issuer: 'University of Michigan',
    date: 'June 2025',
    category: 'Management & Design',
    link: 'https://coursera.org/share/67d380055873d59f2c2ba39332d54838',
  },
  {
    id: '5',
    title: 'Software Development Lifecycle Specialization',
    issuer: 'University of Minnesota',
    date: 'March 2025',
    category: 'Software Engineering',
    link: 'https://coursera.org/share/0f823b7d2467abf279dc0c62f526c865',
  },
  {
    id: '6',
    title: 'Amazon Junior Software Developer Professional Certificate',
    issuer: 'Amazon',
    date: 'March 2025',
    category: 'Software Engineering',
    link: 'https://coursera.org/share/a2983f5a150303a3b581e8423329f7d7',
  },
  {
    id: '7',
    title: 'Core Java for Beginners Specialization',
    issuer: 'LearnKartS',
    date: 'January 2025',
    category: 'Software Engineering',
    link: 'https://coursera.org/share/6be7426b98ee585853ab9989f4bac1e4',
  },
  {
    id: '8',
    title: 'Programming in Java: A Hands-on Introduction Specialization',
    issuer: 'Codio',
    date: 'October 2024',
    category: 'Software Engineering',
    link: 'https://coursera.org/share/2fc05b82d3134f5b131820bf58e55452',
  },
  {
    id: '9',
    title: 'Web Design for Everybody: Basics of Web Development Specialization',
    issuer: 'University of Michigan',
    date: 'October 2024',
    category: 'Software Engineering',
    link: 'https://coursera.org/share/b925342a6a8c37267fde50a091cc64af',
  },
  {
    id: '10',
    title: 'Academic Skills for University Success Specialization',
    issuer: 'University of Sydney',
    date: 'September 2023',
    category: 'General',
    link: 'https://www.coursera.org/account/accomplishments/specialization/ZBA6VT57YYQK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n',
  },
];

export default function EducationSection() {
  const [filter, setFilter] = useState<'All' | 'Software Engineering' | 'Management & Design'>('All');

  const filteredCerts = filter === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === filter);

  return (
    <section
      id="education"
      className="bg-[#0C0C0C] py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-10 relative z-10"
    >
      {/* Title */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {/* Education Item */}
        <FadeIn delay={0.1} y={30}>
          <div className="pb-12 mb-16 border-b border-white/15">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
              <div>
                <span className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest font-light block mb-1">
                  2022 — Present
                </span>
                <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
                  FPT University
                </h3>
              </div>
              <span className="text-[#D7E2EA] text-base sm:text-lg font-medium opacity-90">
                Software Engineering
              </span>
            </div>

            <p className="text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mt-3">
              Focusing on Front-end Development, Back-end architectures with Spring Boot & RESTful APIs, database design (PostgreSQL), containerization (Docker), and modern Web experiences.
            </p>
          </div>
        </FadeIn>

        {/* Certifications Header & Filter */}
        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wider">
              Certifications & Courses ({filteredCerts.length})
            </h3>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {(['All', 'Software Engineering', 'Management & Design'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1 rounded-full text-xs font-light tracking-wider uppercase transition-all duration-200 ${filter === tab
                    ? 'bg-white text-black font-medium'
                    : 'text-[#D7E2EA]/60 hover:text-white border border-white/10'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Certifications List (Clean Border Dividers) */}
        <div className="border-t border-white/15">
          {filteredCerts.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.04} y={15}>
              <a
                href={cert.link || 'https://coursera.org'}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-5 sm:py-6 border-b border-white/10 hover:border-white/30 transition-all gap-4 overflow-hidden"
              >
                {/* Hover Line */}
                <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-white transition-all duration-500 group-hover:w-full" />

                {/* Left: Date, Title & Issuer */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-[#D7E2EA]/40 text-xs sm:text-sm font-mono flex-shrink-0 w-28">
                    {cert.date}
                  </span>
                  <div>
                    <h4 className="text-[#D7E2EA] font-medium text-base sm:text-lg group-hover:text-white transition-colors">
                      {cert.title}
                    </h4>
                    <span className="text-[#D7E2EA]/50 text-xs sm:text-sm font-light">
                      Issued by <span className="text-[#D7E2EA]/80 font-normal">{cert.issuer}</span>
                    </span>
                  </div>
                </div>

                {/* Right: Visit Button */}
                <div className="flex items-center gap-2 text-white flex-shrink-0 self-end sm:self-center">
                  <span className="uppercase tracking-widest text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                    Visit
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-white"
                  />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
