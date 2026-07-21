import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const DECORATIVE_IMAGES = [
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    alt: 'React icon',
    className: 'w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    delay: 0.1,
    x: -80,
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    alt: 'Vite icon',
    className: 'w-[100px] sm:w-[140px] md:w-[180px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    delay: 0.25,
    x: -80,
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    alt: 'Spring Boot icon',
    className: 'w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    delay: 0.15,
    x: 80,
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    alt: 'Docker icon',
    className: 'w-[130px] sm:w-[170px] md:w-[220px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    delay: 0.3,
    x: 80,
  },
];

const ABOUT_TEXT =
  "I am a Software Engineering student actively seeking an internship. While working on projects, I usually take on Front-end tasks, where I enjoy crafting engaging user interfaces. However, I also have a solid grasp of Back-end fundamentals, including building CRUD operations and structuring data effectively. I am familiar with microservices and Docker—I can configure docker-compose and deploy Swagger documentation, allowing the Front-end team to seamlessly consume APIs without needing to run the Back-end locally. I am eager to contribute, learn, and grow alongside a professional team!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative corner images */}
      {DECORATIVE_IMAGES.map((img) => (
        <FadeIn key={img.alt} delay={img.delay} x={img.x} y={0} duration={0.9} className={img.className}>
          <img src={img.src} alt={img.alt} className="w-full h-auto" />
        </FadeIn>
      ))}

      {/* Content */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
