import { useRef } from 'react';
import { motion } from 'framer-motion';

import footterVideo from '../assets/footter.mp4';
import mapVideo from '../assets/map.mp4';
import ciPassedImg from '../assets/CI_passed.png';
import dockerRunningImg from '../assets/docker_running.png';

type MediaItem = { type: 'video' | 'image'; src: string };

const ITEMS: MediaItem[] = [
  { type: 'video', src: footterVideo },
  { type: 'image', src: ciPassedImg },
  { type: 'video', src: mapVideo },
  { type: 'image', src: dockerRunningImg },
];

const ROW1 = [ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3], ITEMS[0], ITEMS[1]];
const ROW2 = [ITEMS[2], ITEMS[3], ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3]];

// Triple for seamless scrolling
const ROW1_TRIPLED = [...ROW1, ...ROW1, ...ROW1];
const ROW2_TRIPLED = [...ROW2, ...ROW2, ...ROW2];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Width of one original set (6 items): (420px width + 12px gap) * 6 = 2592px
  // We translate exactly 2592px to create a seamless infinite loop

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-6 sm:pb-10 overflow-hidden"
    >
      {/* Row 1 - moves right (Left to Right) */}
      <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3">
        <motion.div
          className="flex gap-2 sm:gap-3"
          animate={{ x: [-2592, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {ROW1_TRIPLED.map((item, i) => (
            item.type === 'video' ? (
              <video
                key={`r1-${i}`}
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
              />
            ) : (
              <img
                key={`r1-${i}`}
                src={item.src}
                alt=""
                loading="lazy"
                className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl flex-shrink-0 object-contain bg-white/5 p-1 sm:p-2"
              />
            )
          ))}
        </motion.div>
      </div>

      {/* Row 2 - moves left (Right to Left) */}
      <div className="flex gap-2 sm:gap-3">
        <motion.div
          className="flex gap-2 sm:gap-3"
          animate={{ x: [0, -2592] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {ROW2_TRIPLED.map((item, i) => (
            item.type === 'video' ? (
              <video
                key={`r2-${i}`}
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
              />
            ) : (
              <img
                key={`r2-${i}`}
                src={item.src}
                alt=""
                loading="lazy"
                className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl flex-shrink-0 object-contain bg-white/5 p-1 sm:p-2"
              />
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
}
