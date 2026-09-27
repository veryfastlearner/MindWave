import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import './ArticlesSection.css';

export default function ArticlesSection() {
  const prefersReducedMotion = useReducedMotion();
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
    },
    {
      title: "Les Bases de la Santé Mentale",
      date: "Apr 18, 2026",
      excerpt: "Guide fondamental sur l'équilibre psychologique, les types de troubles et les 10 règles d'or de la santé mentale.",
      tag: "Guide Fondamental",
      link: "/article/mental-health-basics"
    }
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
    <section className="articles-section" id="articles">
      <div className="articles-container">
        <h2 className="articles-title">Our Articles</h2>
        <p className="articles-subtitle">Insights and research to help you navigate your academic journey.</p>
        
        <div className="articles-grid">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="article-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="article-tag">{article.tag}</div>
              <p className="article-date">{article.date}</p>
              <h3 className="article-heading">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <Link to={article.link} className="read-more">Read More →</Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}