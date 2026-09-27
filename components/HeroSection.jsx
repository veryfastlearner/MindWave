import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 1000);

  useEffect(() => {
    const lenis = window.lenis;
    if (!lenis) return;

    const handleScroll = () => {
      setScrollY(lenis.animatedScroll);
    };

    lenis.on('scroll', handleScroll);
    return () => lenis.off('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollProgress = vh > 0 ? Math.min(scrollY / vh, 1) : 0;
  const bgScale = 1 + scrollProgress * 0.15;
  const vignetteOpacity = Math.max(0.5 - scrollProgress, 0);

  const titleVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : { hidden: { opacity: 0, y: 40, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };

  const descVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.1 } } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 } } };

  const btnVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.2 } } }
    : { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 } } };

  return (
    <section className="hero-section">
      <div 
        className="hero-bg" 
        style={{ transform: `scale(${bgScale})`, willChange: 'transform' }}
        aria-hidden="true"
      />
      
      <div 
        className="tunnel-vignette" 
        style={{ opacity: vignetteOpacity, willChange: 'opacity' }}
        aria-hidden="true"
      />

      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          MindWave
        </motion.h1>

        <motion.p 
          className="hero-description"
          initial="hidden"
          animate="visible"
          variants={descVariants}
          style={{ willChange: 'transform, opacity' }}
        >
          Navigating academic pressure shouldn't feel like a solo journey.
          Untangle your thoughts, manage anxiety, and reclaim your mental
          clarity with our AI-driven student support hub.
        </motion.p>

        <div className="hero-buttons">
          <motion.a 
            href="https://scoreboard-2-production.up.railway.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-explore"
            initial="hidden"
            animate="visible"
            variants={btnVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: 'transform' }}
          >
            Submit your Idea <ArrowRight size={18} />
          </motion.a>
          <motion.a 
            href="https://scoreboard-2-production.up.railway.app/leaderboard-ui" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-join"
            initial="hidden"
            animate="visible"
            variants={btnVariants}
            style={{ transitionDelay: '0.4s', willChange: 'transform' }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Leaderboard
          </motion.a>
        </div>
      </div>
    </section>
  )
}