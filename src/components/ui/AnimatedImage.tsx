import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function AnimatedImage({ src, alt, className = "" }: AnimatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden rounded-3xl relative group ${className}`}
    >
      <motion.img
        style={{ scale }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
  );
}
