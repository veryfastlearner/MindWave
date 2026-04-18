import { Link } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-area">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l3-9 5 18 3-9h5" />
            </svg>
          </div>
          <span className="logo-text">MindWave</span>
        </Link>
        
        <nav className="main-nav">
          <HashLink smooth to="/#objectifs">Nos Objectifs</HashLink>
          <HashLink smooth to="/#equipe">Notre Équipe</HashLink>
          <HashLink smooth to="/#articles">Our Articles</HashLink>
          <a href="https://scoreboard-2-production.up.railway.app/" target="_blank" rel="noopener noreferrer">Submit Idea</a>
          <a href="https://scoreboard-2-production.up.railway.app/leaderboard-ui" target="_blank" rel="noopener noreferrer">Leaderboard</a>
        </nav>
        
        <div className="header-actions">
          {/* Actions removed as per simplification request */}
        </div>
      </div>
    </header>
  );
}
