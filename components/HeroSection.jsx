import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">MindWave</h1>
      <p className="hero-description">
        Navigating academic pressure shouldn't feel like a solo journey.
        Untangle your thoughts, manage anxiety, and reclaim your mental
        clarity with our AI-driven student support hub.
      </p>

      <div className="hero-buttons">
        <button className="btn-explore">
          Explore Support Tools <ArrowRight size={18} />
        </button>
        <button className="btn-join">
          Join the MindLab
        </button>
      </div>
    </section>
  )
}