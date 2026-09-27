import { User } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import './TeamSection.css';

export default function TeamSection() {
  const prefersReducedMotion = useReducedMotion();
  const members = [
    { name: 'Chedi Ben Salem' },
    { name: 'Ahmed Ben Mim' },
    { name: 'Taki Allah BENALI' },
    { name: 'Abderrahmen BENSASSI' },
    { name: 'Rana BEN SALEM' },
    { name: 'Ahmed Rayen BEN HASSINE' },
  ];

  const cardVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
      }
    : {
        hidden: { opacity: 0, x: -60, filter: 'blur(8px)' },
        visible: { 
          opacity: 1, 
          x: 0, 
          filter: 'blur(0px)', 
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
        }
      };

  return (
    <section className="team-section" id="equipe">
      <div className="team-container">
        <h2 className="team-title">Notre Équipe</h2>
        
        <div className="team-grid">
          {members.map((member, i) => (
            <motion.div
              key={i}
              className="member-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="member-avatar">
                <User size={40} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              {member.phone && <p className="member-phone">{member.phone}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}