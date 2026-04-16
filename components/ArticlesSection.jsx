import './ArticlesSection.css';

export default function ArticlesSection() {
  const articles = [
    {
      title: "Understanding Mental Fatigue in Students",
      date: "Oct 12, 2023",
      excerpt: "Deep dive into the causes of academic burnout and how to identify early warning signs.",
      tag: "Research"
    },
    {
      title: "The Role of AI in Student Support",
      date: "Sep 28, 2023",
      excerpt: "How machine learning is helping students manage their daily academic pressure and mental clarity.",
      tag: "Technology"
    },
    {
      title: "Mindfulness Practices for Exams",
      date: "Sep 15, 2023",
      excerpt: "Simple techniques to stay grounded and focused during the most stressful times of the year.",
      tag: "Well-being"
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
              <a href="#" className="read-more">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
