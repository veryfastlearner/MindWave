import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ArticlePage.css';

export default function Article3() {
  return (
    <>
      <Header />
      <article className="article-container">
        {/* Header */}
        <header className="article-header">
          <div className="header-content">
            <span className="header-label">Guide Fondamental</span>
            <h1 className="article-title">Les Bases de la Santé Mentale</h1>
            <p className="article-subtitle">
              Définitions et Principes Clés : Élaboré avec les contributions de Mme Lilia (SUP'COM) et Mme Emna (IPEST).
            </p>
            <div className="header-divider"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="article-main">
          <p className="section-intro">
            La santé mentale est souvent mal comprise. Pour bien agir, il faut d'abord maîtriser les concepts de base et les règles qui régissent notre équilibre psychologique.
          </p>

          <blockquote style={{
            borderLeft: '4px solid var(--article-teal)',
            padding: '1.5rem',
            margin: '2rem 0',
            backgroundColor: '#f1f5f9',
            fontStyle: 'italic',
            color: 'var(--article-dark-teal)',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            « Aujourd’hui, l’IA pour la santé mentale reste cantonnée à du simple coaching. On est très loin d'un véritable soin. Ce qui séduit les utilisateurs, c'est uniquement son attitude de servitude : elle est disponible 24h/24 et totalement dédiée à l'instant T, mais cela reste une interaction superficielle. » 
            <footer style={{marginTop: '1rem', fontStyle: 'normal', fontWeight: 'bold'}}>— Mme Emna (IPEST)</footer>
          </blockquote>

          {/* Section I */}
          <section className="content-section" id="definitions">
            <h2 className="section-title">
              <span className="section-number">I</span>
              Définitions Fondamentales
            </h2>
            
            <div className="subsection">
              <h3 className="subsection-title">1. Qu'est-ce que la Santé Mentale ?</h3>
              <p>Ce n'est pas seulement l'absence de maladie. C'est un état de bien-être général qui permet à un individu de :</p>
              <ul className="capability-list" style={{listStyle: 'none', paddingLeft: '1rem'}}>
                <li style={{marginBottom: '0.5rem'}}>✓ Gérer les exigences et les changements de la vie.</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Utiliser ses capacités en harmonie avec ses valeurs.</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Identifier, exprimer et moduler ses propres émotions.</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Maintenir une résilience (capacité à rebondir).</li>
              </ul>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">2. Le Trouble Mental</h3>
              <p>Perturbation importante des fonctions cognitives, de la régulation émotionnelle ou du comportement :</p>
              <div className="two-column-grid">
                <div className="capability-box">
                  <h4>La Névrose</h4>
                  <p>Trouble où l'on reste conscient de ses difficultés (anxiété, phobies, TOC). Très fréquent en milieu étudiant.</p>
                </div>
                <div className="capability-box">
                  <h4>La Psychose</h4>
                  <p>Trouble grave où l'on perd le contact avec la réalité (hallucinations, délires).</p>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">3. Les Professionnels</h3>
              <table className="features-table">
                <thead>
                  <tr>
                    <th>Titre</th>
                    <th>Rôle & Approche</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Psychologue</strong></td>
                    <td>Expert diplômé, soin par la parole (TCC), pas de prescriptions.</td>
                  </tr>
                  <tr>
                    <td><strong>Psychiatre</strong></td>
                    <td>Médecin spécialisé, diagnostic clinique et traitements médicaux.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section II */}
          <section className="content-section" id="regles">
            <h2 className="section-title">
              <span className="section-number">II</span>
              Les 10 Règles d'Or
            </h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h4>Indissociabilité</h4>
                <p>Corps et esprit sont liés ; pas de santé sans santé mentale.</p>
              </div>
              <div className="feature-card">
                <h4>Universalité</h4>
                <p>Nous avons tous une santé mentale, comme une santé physique.</p>
              </div>
              <div className="feature-card">
                <h4>État Dynamique</h4>
                <p>Ce n’est pas figé ; on traverse tous des hauts et des bas.</p>
              </div>
              <div className="feature-card">
                <h4>Responsabilité</h4>
                <p>L'environnement (études, famille) influence énormément notre état.</p>
              </div>
            </div>
            {/* Adding more rules in a simple list to avoid overwhelming grid */}
            <div className="conclusion-box" style={{backgroundColor: 'white', borderTop: 'none', borderLeft: '4px solid var(--article-teal)'}}>
              <p><strong>Autres principes :</strong> Normalité de la souffrance, possibilité de rétablissement, Fitness Mental, et le courage de demander de l'aide.</p>
            </div>
          </section>

          {/* Section III */}
          <section className="content-section" id="alertes">
            <h2 className="section-title">
              <span className="section-number">III</span>
              Signaux d'Alerte
            </h2>
            <div className="operation-list">
              <div className="operation-item">
                <div className="operation-icon">🧠</div>
                <div>
                  <h4>Cognitifs</h4>
                  <p>Difficultés de concentration ou de mémoire.</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">🎭</div>
                <div>
                  <h4>Émotionnels</h4>
                  <p>Tristesse persistante, perte du plaisir social.</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">🛌</div>
                <div>
                  <h4>Physiques</h4>
                  <p>Troubles du sommeil, de l'appétit ou de l'hygiène.</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="conclusion-box" style={{textAlign: 'center'}}>
            <p className="conclusion-main">Briser le cadre est l'objectif numéro un.</p>
            <p>La santé psychologique n'est pas évidente à l'œil nu. Demander de l'aide est un acte de force.</p>
          </footer>
        </main>

        <footer className="article-footer-info">
          <div className="footer-content">
            <p>Guide élaboré pour MindWave avec le soutien de nos partenaires académiques.</p>
          </div>
        </footer>
      </article>
      <Footer />
    </>
  );
}
