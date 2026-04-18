import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ArticlePage.css';

export default function Article2() {
  return (
    <>
      <Header />
      <article className="article-container">
        {/* Header */}
        <header className="article-header">
          <div className="header-content">
            <span className="header-label">Contribution Psychologique</span>
            <h1 className="article-title">Déstigmatiser la Santé Mentale</h1>
            <p className="article-subtitle">
              Stratégies et Leviers d'Action en Milieu Universitaire : Basé sur les contributions de Mme Lilia, psychologue à SUP'COM.
            </p>
            <div className="header-divider"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="article-main">
          <p className="section-intro">
            La santé mentale des étudiants est un enjeu majeur qui nécessite plus que de simples services de soin : elle demande une véritable transformation de la culture universitaire. Pour notre Idéathon, Mme Lilia nous propose des axes concrets pour briser les tabous et intégrer intelligemment le soutien psychologique au quotidien des étudiants.
          </p>

          {/* Section 1 */}
          <section className="content-section" id="langage">
            <h2 className="section-title">
              <span className="section-number">01</span>
              Déconstruire les Idées Reçues
            </h2>
            <p>
              Le premier obstacle à la consultation est souvent une perception erronée de ce qu'est le soin psychologique. Pour inciter les étudiants à franchir le pas, nous devons vulgariser et humaniser la démarche :
            </p>
            
            <div className="feature-grid">
              <div className="feature-card">
                <h4>Langage Accessible</h4>
                <p>Bannir le vocabulaire clinique et remplacer des termes intimidants par des concepts comme "espace pour souffler".</p>
              </div>
              <div className="feature-card">
                <h4>Casser les Mythes</h4>
                <p>Rappeler que le psy n'est pas réservé aux cas extrêmes, mais à tous ceux traversant des périodes difficiles.</p>
              </div>
              <div className="feature-card">
                <h4>Efficacité Immédiate</h4>
                <p>Un seul entretien peut suffire à débloquer une situation, sans forcément engendrer un suivi long et lourd.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="content-section" id="securite">
            <h2 className="section-title">
              <span className="section-number">02</span>
              Sécurité et Confidentialité
            </h2>
            <p>
              Pour instaurer la confiance, l'institution doit offrir des garanties claires et sans ambiguïté :
            </p>
            
            <div className="operation-list">
              <div className="operation-item">
                <div className="operation-icon">🛡️</div>
                <div>
                  <h4>100% Anonyme</h4>
                  <p>Service gratuit et totalement anonyme pour tous les étudiants.</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">📄</div>
                <div>
                  <h4>Dossier Académique</h4>
                  <p>Aucune mention du suivi psychologique ne figure dans le dossier universitaire.</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">💻</div>
                <div>
                  <h4>Accessibilité Numérique</h4>
                  <p>Page dédiée et options de consultation en ligne pour renforcer l'anonymat.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="content-section" id="communaute">
            <h2 className="section-title">
              <span className="section-number">03</span>
              Communauté de Veille
            </h2>
            <p>
              La détection précoce ne doit pas reposer uniquement sur l'étudiant en souffrance. Une approche collective est nécessaire :
            </p>

            <div className="capability-box can-do" style={{marginTop: '2rem'}}>
              <h3>Acteurs de la Santé Mentale</h3>
              <ul className="capability-list" style={{listStyle: 'none', paddingLeft: 0}}>
                <li><strong>Ambassadeurs Étudiants :</strong> Des pairs formés pour orienter leurs camarades sans stigmatisation.</li>
                <li><strong>Personnel Administratif :</strong> Repérer les signaux faibles (baisse de résultats, absentéisme).</li>
                <li><strong>Corps Enseignant :</strong> Orienter sans jugement vers les services compétents.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="content-section" id="terrain">
            <h2 className="section-title">
              <span className="section-number">04</span>
              Présence sur le Terrain
            </h2>
            <p>
              La visibilité physique du service de psychologie aide à sa normalisation au sein de l'école :
            </p>
            
            <div className="ethics-grid">
              <div className="ethics-card">
                <h3>Visibilité Directe</h3>
                <p>Installation de stands et distribution de flyers dans les couloirs pour une présence régulière.</p>
              </div>
              <div className="ethics-card">
                <h3>Témoignages</h3>
                <p>Partage de retours anonymes d'autres étudiants pour prouver l'impact positif du service.</p>
              </div>
            </div>
          </section>

          <footer className="conclusion-box">
            <p className="conclusion-main">
              La déstigmatisation est un processus continu qui repose sur la communication, la confiance et la proximité.
            </p>
            <p>
              En humanisant le langage et en garantissant une sécurité absolue, nous pouvons faire de la santé mentale une composante naturelle de la réussite universitaire.
            </p>
          </footer>
        </main>

        <footer className="article-footer-info">
          <div className="footer-content">
            <p>Ce document est basé sur les expertises partagées par Mme Lilia lors de l'Idéathon MindWave.</p>
          </div>
        </footer>
      </article>
      <Footer />
    </>
  );
}
