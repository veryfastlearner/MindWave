import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-area">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l3-9 5 18 3-9h5" />
            </svg>
          </div>
          <span className="logo-text">MindWave</span>
        </div>
        
        <nav className="main-nav">
          <a href="#objectifs">Nos Objectifs</a>
          <a href="#equipe">Notre Équipe</a>
          <a href="#articles">Our Articles</a>
          <a href="https://example.com/scoreboard" target="_blank" rel="noopener noreferrer">Scoreboard</a>
          <a href="https://example.com/chatbot" target="_blank" rel="noopener noreferrer">Our Chatbot</a>
        </nav>
        
        <div className="header-actions">
          <button className="btn-get-started">Get Started</button>
        </div>
      </div>
    </header>
  );
}
