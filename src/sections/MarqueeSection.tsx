import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import footterVideo from '../assets/footter.mp4';
import mapVideo from '../assets/map.mp4';
import ciPassedImg from '../assets/CI_passed.png';
import dockerRunningImg from '../assets/docker_running.png';

type MediaItem = {
  type: 'video' | 'image';
  src: string;
};

const ITEMS: MediaItem[] = [
  { type: 'video', src: footterVideo },
  { type: 'image', src: ciPassedImg },
  { type: 'video', src: mapVideo },
  { type: 'image', src: dockerRunningImg },
];

const ROW1 = [ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3], ITEMS[0], ITEMS[1]];
const ROW2 = [ITEMS[2], ITEMS[3], ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3]];

const ROW1_TRIPLED = [...ROW1, ...ROW1, ...ROW1];
const ROW2_TRIPLED = [...ROW2, ...ROW2, ...ROW2];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMedia(null);
      }
    };

    if (selectedMedia) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMedia]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-6 sm:pb-10 overflow-hidden"
    >
      {/* Row 1 */}
      <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3">
        <motion.div
          className="flex gap-2 sm:gap-3"
          animate={{ x: [-2592, 0] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
        >
          {ROW1_TRIPLED.map((item, i) =>
            item.type === 'video' ? (
              <video
                key={`r1-${i}`}
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                onClick={() => setSelectedMedia(item)}
                className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0 cursor-pointer hover:scale-[1.02] transition-transform"
              />
            ) : (
              <img
                key={`r1-${i}`}
                src={item.src}
                alt=""
                loading="lazy"
                onClick={() => setSelectedMedia(item)}
                className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl flex-shrink-0 object-contain bg-white/5 p-1 sm:p-2 cursor-pointer hover:scale-[1.02] transition-transform"
              />
            )
          )}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-2 sm:gap-3">
        <motion.div
          className="flex gap-2 sm:gap-3"
          animate={{ x: [0, -2592] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
        >
          {ROW2_TRIPLED.map((item, i) =>
            item.type === 'video' ? (
              <video
                key={`r2-${i}`}
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                onClick={() => setSelectedMedia(item)}
                className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0 cursor-pointer hover:scale-[1.02] transition-transform"
              />
            ) : (
              <img
                key={`r2-${i}`}
                src={item.src}
                alt=""
                loading="lazy"
                onClick={() => setSelectedMedia(item)}
                className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl flex-shrink-0 object-contain bg-white/5 p-1 sm:p-2 cursor-pointer hover:scale-[1.02] transition-transform"
              />
            )
          )}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-white/40 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia(null);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {selectedMedia.type === 'video' ? (
            <video
              src={selectedMedia.src}
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={selectedMedia.src}
              alt=""
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
}