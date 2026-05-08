'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BookMockup3DProps {
  src: string;
  alt: string;
  className?: string;
  glow?: boolean;
}

export function BookMockup3D({ src, alt, className, glow = true }: BookMockup3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative inline-block', className)}
      style={{ perspective: '1200px' }}
    >
      {glow && (
        <div
          aria-hidden
          className="absolute -inset-12 -z-10 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 50% 60%, rgba(176, 133, 56, 0.35), transparent 70%)',
          }}
        />
      )}

      <motion.div
        whileHover={{ rotateY: -6, rotateX: 2 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative aspect-[2/3] w-full max-w-[420px] mx-auto">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 80vw, 420px"
            className="object-contain drop-shadow-[0_24px_48px_rgba(15,26,46,0.35)]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
