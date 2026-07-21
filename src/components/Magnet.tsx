import { useRef, useState, useCallback, type ReactNode, type MouseEvent } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [transform, setTransform] = useState('translate3d(0,0,0)');
  const [transition, setTransition] = useState(inactiveTransition);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const dist = Math.sqrt(dx * dx + dy * dy);
      const threshold = Math.max(rect.width, rect.height) / 2 + padding;

      if (dist < threshold) {
        setActive(true);
        setTransition(activeTransition);
        setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0)`);
      } else if (active) {
        setActive(false);
        setTransition(inactiveTransition);
        setTransform('translate3d(0,0,0)');
      }
    },
    [active, padding, strength, activeTransition, inactiveTransition]
  );

  const handleMouseLeave = useCallback(() => {
    setActive(false);
    setTransition(inactiveTransition);
    setTransform('translate3d(0,0,0)');
  }, [inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
