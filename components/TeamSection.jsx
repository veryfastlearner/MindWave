import { User } from 'lucide-react';
import './TeamSection.css';

export default function TeamSection() {
  const members = [
    { name: 'Chedi Ben Salem' },
    { name: 'Ahmed Ben Mim' },
  ]

  return (
    <section className="team-section" id="equipe">
      <div className="team-container">
        <h2 className="team-title">Notre Équipe</h2>
        
        <div className="team-grid">
          {members.map((member, i) => (
            <div key={i} className="member-card">
              <div className="member-avatar">
                <User size={40} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              {member.phone && <p className="member-phone">{member.phone}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}