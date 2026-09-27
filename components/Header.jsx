import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: 'Nos Objectifs', href: '/#objectifs', isHash: true },
    { label: 'Notre Équipe', href: '/#equipe', isHash: true },
    { label: 'Our Articles', href: '/#articles', isHash: true },
    { label: 'Submit Idea', href: 'https://scoreboard-2-production.up.railway.app/', isExternal: true },
    { label: 'Leaderboard', href: 'https://scoreboard-2-production.up.railway.app/leaderboard-ui', isExternal: true },
  ];

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
        
        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link, i) => (
            <MobileNavLink
              key={i}
              {...link}
              onClick={closeMobileMenu}
            />
          ))}
        </nav>

        <button
          ref={hamburgerRef}
          className={`hamburger-btn ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="mobile-menu-overlay"
          onClick={(e) => e.target === e.currentTarget && closeMobileMenu()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="mobile-menu">
            <button
              className="mobile-menu-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <MobileNavLink
                key={i}
                {...link}
                onClick={closeMobileMenu}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavLink({ label, href, isHash, isExternal, onClick }) {
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-nav-link"
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
  if (isHash) {
    return (
      <HashLink
        smooth
        to={href}
        className="mobile-nav-link"
        onClick={onClick}
      >
        {label}
      </HashLink>
    );
  }
  return (
    <Link
      to={href}
      className="mobile-nav-link"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}