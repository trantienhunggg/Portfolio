import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Front-end Development',
    description:
      'Building modern, smooth, and responsive user interfaces using React, focusing on delivering an engaging user experience and high performance.',
  },
  {
    number: '02',
    name: 'Back-end Development',
    description:
      'Developing RESTful APIs with Spring Boot, proficient in implementing CRUD operations and designing clear, maintainable database structures.',
  },
  {
    number: '03',
    name: 'API Design & Documentation',
    description:
      'Designing and documenting APIs comprehensively using Swagger/OpenAPI to create clear contracts for seamless Front-end and Back-end integration.',
  },
  {
    number: '04',
    name: 'Containerization & DevOps',
    description:
      'Utilizing Docker and configuring docker-compose to containerize applications, ensuring consistent and easily reproducible local environments.',
  },
  {
    number: '05',
    name: 'Microservices Architecture',
    description:
      'Applying foundational knowledge of Microservices to decouple services, enhancing the scalability and maintainability of large-scale projects.',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0
                  ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>

              {/* Name & Description */}
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
