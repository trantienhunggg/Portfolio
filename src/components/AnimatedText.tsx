import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function CharSpan({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <CharSpan
          key={i}
          char={char}
          index={i}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}
