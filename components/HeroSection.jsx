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
        <a href="https://scoreboard-2-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="btn-explore">
          Submit your Idea <ArrowRight size={18} />
        </a>
        <a href="https://scoreboard-2-production.up.railway.app/leaderboard-ui" target="_blank" rel="noopener noreferrer" className="btn-join">
          View Leaderboard
        </a>
      </div>
    </section>
  )
}