import { Link } from 'react-router-dom';
import './ArticlesSection.css';

export default function ArticlesSection() {
  const articles = [
    {
      title: "AI in Mental Health Support",
      date: "Apr 16, 2026",
      excerpt: "A comprehensive overview of the roles, capabilities, and research evidence for AI companions in mental healthcare.",
      tag: "Research & Evidence",
      link: "/article/ai-mental-health"
    },
    {
      title: "Déstigmatiser la Santé Mentale",
      date: "Apr 18, 2026",
      excerpt: "Axes concrets pour briser les tabous et intégrer intelligemment le soutien psychologique au quotidien des étudiants.",
      tag: "Contribution Psychologique",
      link: "/article/destigmatization"
    }
  ];

  return (
    <section className="articles-section" id="articles">
      <div className="articles-container">
        <h2 className="articles-title">Our Articles</h2>
        <p className="articles-subtitle">Insights and research to help you navigate your academic journey.</p>
        
        <div className="articles-grid">
          {articles.map((article, index) => (
            <article key={index} className="article-card">
              <div className="article-tag">{article.tag}</div>
              <p className="article-date">{article.date}</p>
              <h3 className="article-heading">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <Link to={article.link} className="read-more">Read More →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
