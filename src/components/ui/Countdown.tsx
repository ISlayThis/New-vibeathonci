import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Countdown() {
  const targetDate = new Date("2026-07-11T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-4 md:gap-8 justify-center items-center mt-12 mb-12"
    >
      {[
        { label: "Jours", value: timeLeft.days },
        { label: "Heures", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Secondes", value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
             <span className="text-3xl md:text-5xl font-mono text-white tracking-widest font-light tabular-nums">
               {String(item.value).padStart(2, '0')}
             </span>
          </div>
          <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-[0.2em] mt-4">{item.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
