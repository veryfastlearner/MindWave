import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ArticlePage.css';
 
export default function ArticlePage() {
  return (
    <>
      <Header />
      <article className="article-container">
        {/* Header */}
        <header className="article-header">
          <div className="header-content">
            <span className="header-label">Research & Evidence</span>
            <h1 className="article-title">AI in Mental Health Support</h1>
            <p className="article-subtitle">A Comprehensive Overview: Roles, Capabilities, Limitations & Research Evidence</p>
            <div className="header-divider"></div>
          </div>
        </header>
 
        {/* Main Content */}
        <main className="article-main">
          {/* Section 1: Roles */}
          <section className="content-section" id="roles">
            <h2 className="section-title">
              <span className="section-number">01</span>
              Roles AI Can Play in Mental Health Support
            </h2>
            
            <p className="section-intro">AI tools have been adapted to serve a range of therapeutic and supportive functions. The following roles represent areas where AI companions and chatbots are currently being applied:</p>
 
            <div className="subsection">
              <h3 className="subsection-title">Therapeutic Modalities</h3>
              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon">🧠</div>
                  <h4>Cognitive Behavioral Therapy</h4>
                  <p>Structured techniques to identify and reframe negative thought patterns</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⚖️</div>
                  <h4>Dialectical Behavior Therapy</h4>
                  <p>Skills for emotional regulation and distress tolerance</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🌱</div>
                  <h4>Trauma Recovery Support</h4>
                  <p>Guided processing for individuals with trauma histories</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🧘</div>
                  <h4>Mindfulness Coaching</h4>
                  <p>Exercises for present-moment awareness and stress reduction</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">💙</div>
                  <h4>Grief Counselling</h4>
                  <p>Supportive space for processing loss</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔄</div>
                  <h4>Addiction Counselling</h4>
                  <p>Structured guidance around habit change and coping</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🎯</div>
                  <h4>Solution-Focused Therapy</h4>
                  <p>Forward-looking, goal-oriented conversations</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🌊</div>
                  <h4>Anxiety and Stress Therapy</h4>
                  <p>Evidence-based coping strategies</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🤝</div>
                  <h4>Relationship Counselling</h4>
                  <p>Frameworks for navigating interpersonal challenges</p>
                </div>
              </div>
            </div>
 
            <div className="subsection">
              <h3 className="subsection-title">Support and Wellness Functions</h3>
              <div className="feature-grid condensed">
                <div className="feature-card minimal">
                  <span className="feature-label">Career & Wellness Coaching</span>
                  <p>Goal-setting and personal development</p>
                </div>
                <div className="feature-card minimal">
                  <span className="feature-label">Empathetic Listening</span>
                  <p>Non-judgmental space to express thoughts and feelings</p>
                </div>
                <div className="feature-card minimal">
                  <span className="feature-label">Thought Processing</span>
                  <p>Helping users untangle complex or overwhelming situations</p>
                </div>
                <div className="feature-card minimal">
                  <span className="feature-label">Decision Support</span>
                  <p>Structured reflection to help users think through choices</p>
                </div>
                <div className="feature-card minimal">
                  <span className="feature-label">Learning & Curiosity</span>
                  <p>Simplifying complex topics on demand</p>
                </div>
              </div>
            </div>
          </section>
 
          {/* Section 2: How They Work */}
          <section className="content-section" id="how-they-work">
            <h2 className="section-title">
              <span className="section-number">02</span>
              How AI Mental Health Companions Work
            </h2>
            <p className="section-intro">AI mental health tools use natural language processing (NLP) to provide a responsive, supportive conversational experience.</p>
            
            <div className="operation-list">
              <div className="operation-item">
                <div className="operation-icon">⏰</div>
                <div>
                  <h4>24/7 Availability</h4>
                  <p>Accessible across mobile and web platforms at any time</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">💬</div>
                <div>
                  <h4>Contextual Memory</h4>
                  <p>Maintains coherent, personalized interactions within sessions</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">📊</div>
                <div>
                  <h4>Pattern Recognition</h4>
                  <p>Analyzes mood, communication style, sleep, stress and habits</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">🎙️</div>
                <div>
                  <h4>Real-Time Guidance</h4>
                  <p>Delivers support through conversational interface immediately</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">🎨</div>
                <div>
                  <h4>Personality Customization</h4>
                  <p>Users can select tone from direct to warm and empathetic</p>
                </div>
              </div>
              <div className="operation-item">
                <div className="operation-icon">🔄</div>
                <div>
                  <h4>Personalization Over Time</h4>
                  <p>Adapts responses based on interaction history and patterns</p>
                </div>
              </div>
            </div>
          </section>
 
          {/* Section 3: Capabilities & Limitations */}
          <section className="content-section" id="capabilities">
            <h2 className="section-title">
              <span className="section-number">03</span>
              Capabilities and Limitations
            </h2>
 
            <div className="two-column-grid">
              <div className="capability-box can-do">
                <h3>✓ What AI Can Do</h3>
                <ul className="capability-list">
                  <li>Provide immediate, accessible emotional support between therapy sessions</li>
                  <li>Deliver evidence-based techniques (CBT, DBT, mindfulness) at scale</li>
                  <li>Track mood trends and behavioral patterns over time</li>
                  <li>Screen for symptoms of anxiety, depression, and burnout</li>
                  <li>Connect users to community resources and crisis contacts</li>
                  <li>Serve as a low-barrier entry point for underserved populations</li>
                </ul>
              </div>
 
              <div className="capability-box cannot-do">
                <h3>✗ What AI Cannot Do</h3>
                <ul className="capability-list">
                  <li>Provide formal diagnoses or clinical evaluations</li>
                  <li>Replace licensed psychologists' expertise and clinical judgment</li>
                  <li>Manage complex mental health crises without human oversight</li>
                  <li>Provide the nuanced understanding of trained human therapists</li>
                </ul>
              </div>
            </div>
 
            <div className="crisis-alert">
              <div className="crisis-icon">⚠️</div>
              <div className="crisis-content">
                <h3>Important</h3>
                <p>If you are experiencing a mental health crisis, struggling with thoughts of self-harm, or require a clinical diagnosis, please seek help from a licensed professional or emergency services immediately.</p>
              </div>
            </div>
          </section>
 
          {/* Section 4: Common Features */}
          <section className="content-section" id="features">
            <h2 className="section-title">
              <span className="section-number">04</span>
              Common Features of AI Mental Health Apps
            </h2>
 
            <div className="features-table-wrapper">
              <table className="features-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Mood Tracking</strong></td>
                    <td>Daily check-ins using emoji or scale ratings to log emotional state</td>
                  </tr>
                  <tr>
                    <td><strong>Progress Statistics</strong></td>
                    <td>Weekly summaries to monitor trends and improvements over time</td>
                  </tr>
                  <tr>
                    <td><strong>Wellness Library</strong></td>
                    <td>Breathing exercises, soundscapes, guided meditations, psychoeducation content</td>
                  </tr>
                  <tr>
                    <td><strong>Actionable Suggestions</strong></td>
                    <td>Context-sensitive tools to manage anxiety, low motivation, stress in the moment</td>
                  </tr>
                  <tr>
                    <td><strong>Crisis Support</strong></td>
                    <td>Emergency alerts, escalation pathways, links to local crisis resources</td>
                  </tr>
                  <tr>
                    <td><strong>Gamification</strong></td>
                    <td>Points, rewards, and challenges to encourage continued engagement</td>
                  </tr>
                  <tr>
                    <td><strong>Peer / Coach Support</strong></td>
                    <td>Optional human coach integration or peer support forums within select platforms</td>
                  </tr>
                  <tr>
                    <td><strong>Voice Mode</strong></td>
                    <td>Audio-based interaction for on-the-go use (commuting, walking, etc.)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
 
          {/* Section 5: Research Evidence */}
          <section className="content-section" id="research">
            <h2 className="section-title">
              <span className="section-number">05</span>
              Research Evidence: AI Chatbots for Healthcare Professional Wellbeing
            </h2>
 
            <div className="research-overview">
              <div className="overview-card">
                <h3>Background</h3>
                <p>Healthcare workers face disproportionately high rates of burnout, anxiety, and depression. Traditional face-to-face support is often inaccessible due to time constraints, stigma, and anonymity concerns. AI chatbots have emerged as a potential complement to address these gaps.</p>
                <p>A scoping review (published 2024, covering studies from 2018–2024) examined <strong>10 studies</strong> on AI chatbot interventions targeting healthcare professionals across <strong>8 countries</strong>: Canada, Japan, Malawi, the Netherlands, Singapore, Spain, and the United States.</p>
              </div>
            </div>
 
            <div className="subsection">
              <h3 className="subsection-title">Study Design Overview</h3>
              <p>The reviewed studies employed diverse methodologies: development studies, a randomized controlled trial, pilot and feasibility studies, a mixed-methods study, an intervention study, and a qualitative study—reflecting the early-stage nature of the field.</p>
            </div>
 
            <div className="subsection">
              <h3 className="subsection-title">AI Technologies Used</h3>
              <div className="tech-breakdown">
                <div className="tech-item">
                  <div className="tech-bar" style={{width: '60%'}}></div>
                  <h4>NLP-based AI (60%)</h4>
                  <p>6 of 10 studies — the most common approach; enables personalized, conversational interactions</p>
                </div>
                <div className="tech-item">
                  <div className="tech-bar" style={{width: '20%'}}></div>
                  <h4>Rule-based AI (20%)</h4>
                  <p>2 of 10 studies — provides fixed, structured responses; limited in adaptability</p>
                </div>
                <div className="tech-item">
                  <div className="tech-bar" style={{width: '20%'}}></div>
                  <h4>Learning-based AI (20%)</h4>
                  <p>2 of 10 studies — adapts over time for increasingly personalized support</p>
                </div>
              </div>
            </div>
 
            <div className="subsection">
              <h3 className="subsection-title">Therapeutic Content Included</h3>
              <div className="content-checklist">
                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <h4>Mental Health Screening</h4>
                    <p><em>7 of 10 studies</em> — anxiety (GAD-7), depression (PHQ-9), burnout assessment</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <h4>CBT Techniques</h4>
                    <p><em>4 studies</em></p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <h4>Stress Management</h4>
                    <p><em>4 studies</em> — breathing, meditation, relaxation</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <h4>Psychoeducation</h4>
                    <p><em>3 studies</em></p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <h4>Problem-Solving & Behavioral Activation</h4>
                    <p><em>3 & 2 studies</em> respectively</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <h4>Crisis Management & Emergency Referrals</h4>
                    <p><em>7 of 10 studies</em></p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="subsection">
              <h3 className="subsection-title">Key Findings</h3>
              
              <div className="findings-container">
                <div className="finding-box">
                  <h4>Usability</h4>
                  <p className="finding-stat">91%</p>
                  <p>Users found one chatbot easy to use</p>
                  <p className="finding-detail">Over 80% rated another tool as helpful; average satisfaction: <strong>4.07/5</strong></p>
                </div>
                
                <div className="finding-box">
                  <h4>Burnout</h4>
                  <p className="finding-stat">✓ Sig.</p>
                  <p>Significant reductions reported in both studies that assessed it</p>
                </div>
                
                <div className="finding-box">
                  <h4>Depression</h4>
                  <p className="finding-stat">Mixed</p>
                  <p>One study showed improvement; another showed no significant change</p>
                </div>
                
                <div className="finding-box">
                  <h4>Anxiety</h4>
                  <p className="finding-stat">Mixed</p>
                  <p>One study reported significant reduction; two showed no difference</p>
                </div>
 
                <div className="finding-box">
                  <h4>Resilience</h4>
                  <p className="finding-stat">✓ Sig.</p>
                  <p>Significant improvement in one study</p>
                </div>
                
                <div className="finding-box">
                  <h4>Engagement</h4>
                  <p className="finding-stat">14–73%</p>
                  <p>Completion rates varied, reflecting non-linear use patterns</p>
                </div>
              </div>
            </div>
 
            <div className="subsection">
              <h3 className="subsection-title">Limitations of Current Research</h3>
              <div className="limitations-list">
                <div className="limitation-item">
                  <div className="limitation-number">1</div>
                  <p><strong>Limited clinical outcome measurement:</strong> Only 4 of 10 studies measured psychological outcomes; majority focused on usability</p>
                </div>
                <div className="limitation-item">
                  <div className="limitation-number">2</div>
                  <p><strong>Short durations:</strong> Small sample sizes and 2-week to 2-month interventions limit long-term effectiveness conclusions</p>
                </div>
                <div className="limitation-item">
                  <div className="limitation-number">3</div>
                  <p><strong>Geographic bias:</strong> Most studies conducted in high-income countries; limited generalizability</p>
                </div>
                <div className="limitation-item">
                  <div className="limitation-number">4</div>
                  <p><strong>Methodological heterogeneity:</strong> Varied study designs, AI types, and outcome measures make direct comparison difficult</p>
                </div>
                <div className="limitation-item">
                  <div className="limitation-number">5</div>
                  <p><strong>Standardization gap:</strong> Field still lacks standardized protocols and outcome measures</p>
                </div>
              </div>
            </div>
          </section>
 
          {/* Section 6: Ethics & Regulation */}
          <section className="content-section" id="ethics">
            <h2 className="section-title">
              <span className="section-number">06</span>
              Ethical and Regulatory Considerations
            </h2>
 
            <p className="section-intro">As AI mental health tools become more widespread, important ethical and policy questions are emerging:</p>
 
            <div className="ethics-grid">
              <div className="ethics-card">
                <h3>⚖️ Regulatory Frameworks</h3>
                <p>Some jurisdictions (e.g., Illinois, Nevada) are introducing laws to define what AI mental health tools can and cannot do, including restrictions on mimicking therapy or storing user data</p>
              </div>
              <div className="ethics-card">
                <h3>🔒 Privacy & Data Security</h3>
                <p>Responsible platforms process data without persistent storage of sensitive conversations</p>
              </div>
              <div className="ethics-card">
                <h3>🎯 Avoiding Sycophancy</h3>
                <p>When engagement is optimized for stickiness rather than wellbeing, AI companions risk reinforcing dependency rather than supporting genuine recovery</p>
              </div>
              <div className="ethics-card">
                <h3>📢 Transparency</h3>
                <p>Users should be clearly informed they are interacting with an AI, not a licensed clinician</p>
              </div>
              <div className="ethics-card">
                <h3>🌍 Bias Minimization</h3>
                <p>Algorithms should be built on established psychological frameworks and continuously refined to reduce demographic or cultural bias</p>
              </div>
              <div className="ethics-card">
                <h3>♿ Equity of Access</h3>
                <p>Pricing models and language support should aim to make tools accessible across socioeconomic and geographic groups</p>
              </div>
            </div>
          </section>
 
          {/* Section 7: Conclusions */}
          <section className="content-section final-section" id="conclusions">
            <h2 className="section-title">
              <span className="section-number">07</span>
              Conclusions and Future Directions
            </h2>
 
            <div className="conclusion-box">
              <p className="conclusion-main">AI chatbots show meaningful promise as accessible, scalable mental health support tools—particularly for populations with limited access to traditional care, for use between therapy sessions, and for addressing the wellbeing of healthcare professionals themselves.</p>
 
              <p>However, research in this field remains at an early stage. The most important gaps to address include:</p>
 
              <div className="future-directions">
                <div className="direction-item">
                  <span className="direction-icon">📊</span>
                  <p>Conducting larger, more rigorous clinical trials with standardized outcome measures</p>
                </div>
                <div className="direction-item">
                  <span className="direction-icon">⏳</span>
                  <p>Extending follow-up periods to assess long-term effectiveness and sustainability</p>
                </div>
                <div className="direction-item">
                  <span className="direction-icon">🌐</span>
                  <p>Expanding research to diverse populations, including lower-income settings</p>
                </div>
                <div className="direction-item">
                  <span className="direction-icon">⚙️</span>
                  <p>Refining personalization algorithms while maintaining evidence-based standards</p>
                </div>
                <div className="direction-item">
                  <span className="direction-icon">📋</span>
                  <p>Developing clearer guidelines on the appropriate scope, boundaries, and ethics of AI mental health tools</p>
                </div>
              </div>
 
              <div className="final-message">
                <p><strong>When thoughtfully designed and clearly positioned as a complement—not a replacement—to professional care, AI has the potential to meaningfully expand access to mental health support worldwide.</strong></p>
              </div>
            </div>
          </section>
        </main>
 
        {/* Footer info within article */}
        <footer className="article-footer-info">
          <div className="footer-content">
            <p>This comprehensive overview synthesizes current research on AI-assisted mental health support. For clinical guidance, consult with licensed healthcare professionals.</p>
          </div>
        </footer>
      </article>
      <Footer />
    </>
  );
}
