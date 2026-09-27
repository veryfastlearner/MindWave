import { Calendar, Users, Zap } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './ProgramSection.css';

const features = [
  {
    icon: Calendar,
    title: 'MindLab Event: April 18th - IPEST',
    desc: 'Join us at IPEST for a day of intensive workshops, student-led discussions, and collaborative problem-solving focused on academic well-being.'
  },
  {
    icon: Users,
    title: 'Student Engagement',
    desc: 'We believe the best solutions come from those in the trenches. Our program is built on direct student feedback and active participation.'
  },
  {
    icon: Zap,
    title: 'Action-Oriented Results',
    desc: 'No more vague advice. We provide concrete tools and strategies that deliver measurable improvements in mental fatigue and anxiety levels.'
  }
];

function FeatureCard({ feature, index, isMobile, prefersReducedMotion }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getVariants = () => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay: index * 0.1 } }
      };
    }

    if (isMobile) {
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            type: 'spring', 
            stiffness: 100, 
            damping: 15,
            delay: index * 0.12 
          } 
        }
      };
    }

    const direction = index % 2 === 0 ? -1 : 1;
    return {
      hidden: { opacity: 0, x: direction * 400, rotateY: direction * 45 },
      visible: { 
        opacity: 1, 
        x: 0, 
        rotateY: 0, 
        transition: { 
          type: 'spring', 
          stiffness: 80, 
          damping: 12,
          delay: index * 0.12 
        } 
      }
    };
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      className="feature-item"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="feature-icon">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10, delay: index * 0.12 + 0.3 }}
          style={{ willChange: 'transform' }}
        >
          <feature.icon size={20} />
        </motion.div>
      </div>
      <div className="feature-text-block">
        <motion.h3
          className="feature-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.4 }}
          style={{ willChange: 'transform, opacity' }}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          className="feature-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.5 }}
          style={{ willChange: 'transform, opacity' }}
        >
          {feature.desc}
        </motion.p>
      </div>
    </motion.div>
  );
}

function ProgramImage({ isInView, prefersReducedMotion }) {
  if (prefersReducedMotion) {
    return (
      <motion.div
        className="image-wrapper"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img src="/mindlab_landscape.png" alt="Person overlooking mountains at sunset" className="program-image" loading="lazy" />
        <div className="quote-box">
          <p className="quote-text">"Concrete results for real challenges."</p>
          <p className="quote-author">&mdash; MindLab Student Council</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="image-wrapper"
      initial={{ opacity: 0, y: 60, scale: 1.02 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
      style={{ willChange: 'transform, opacity' }}
    >
      <img src="/mindlab_landscape.png" alt="Person overlooking mountains at sunset" className="program-image" loading="lazy" />
      <motion.div
        className="quote-box"
        initial={{ opacity: 0, x: 40, y: 40 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 40, y: 40 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.5 }}
        style={{ willChange: 'transform, opacity' }}
      >
        <p className="quote-text">"Concrete results for real challenges."</p>
        <p className="quote-author">&mdash; MindLab Student Council</p>
      </motion.div>
    </motion.div>
  );
}

export default function ProgramSection() {
  const prefersReducedMotion = useReducedMotion();
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });
  const imageInView = useInView(imageRef, { once: true, margin: '-100px' });
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const titleVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };

  return (
    <section className="program-section" id="objectifs">
      <div className="program-container">
        <motion.div
          ref={contentRef}
          className="program-content"
          initial="hidden"
          animate={contentInView ? 'visible' : 'hidden'}
          variants={titleVariants}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 className="program-title">
            The MindLab Program
          </motion.h2>
          <motion.p className="program-subtitle">
            A concrete, action-oriented initiative designed to transform student mental health through collaboration and engagement.
          </motion.p>

          <div className="program-features">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                isMobile={isMobile}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="program-visual"
          initial={false}
          animate={imageInView ? 'visible' : 'hidden'}
        >
          <ProgramImage isInView={imageInView} prefersReducedMotion={prefersReducedMotion} />
        </motion.div>
      </div>
    </section>
  );
}