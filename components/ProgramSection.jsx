import { Calendar, Users, Zap } from 'lucide-react';
import './ProgramSection.css';

export default function ProgramSection() {
  return (
    <section className="program-section" id="objectifs">
      <div className="program-container">
        
        <div className="program-content">
          <h2 className="program-title">The MindLab Program</h2>
          <p className="program-subtitle">
            A concrete, action-oriented initiative designed to transform student mental health through collaboration and engagement.
          </p>

          <div className="program-features">
            <div className="feature-item">
              <div className="feature-icon">
                <Calendar size={20} />
              </div>
              <div className="feature-text-block">
                <h3 className="feature-title">MindLab Event: April 18th - IPEST</h3>
                <p className="feature-desc">
                  Join us at IPEST for a day of intensive workshops, student-led discussions, and collaborative problem-solving focused on academic well-being.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Users size={20} />
              </div>
              <div className="feature-text-block">
                <h3 className="feature-title">Student Engagement</h3>
                <p className="feature-desc">
                  We believe the best solutions come from those in the trenches. Our program is built on direct student feedback and active participation.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Zap size={20} />
              </div>
              <div className="feature-text-block">
                <h3 className="feature-title">Action-Oriented Results</h3>
                <p className="feature-desc">
                  No more vague advice. We provide concrete tools and strategies that deliver measurable improvements in mental fatigue and anxiety levels.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="program-visual">
          <div className="image-wrapper">
            <img src="/mindlab_landscape.png" alt="Person overlooking mountains at sunset" className="program-image" />
            <div className="quote-box">
              <p className="quote-text">"Concrete results for real challenges."</p>
              <p className="quote-author">— MindLab Student Council</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
