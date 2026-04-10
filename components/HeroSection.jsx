import { Brain, Heart, MessageSquare } from 'lucide-react'

export default function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-content">
        <span className="badge">SUP'COM × EDUCARE</span>

        <h1>MindWave</h1>
        <p className="subtitle">Healthy Minds, Healthy Futures</p>

        <p>
          Une initiative étudiante dédiée à la santé mentale en milieu académique
        </p>

        <div className="buttons">
          <button>
            <Heart size={18} /> En savoir plus
          </button>
          <button className="outline">
            <MessageSquare size={18} /> Nous contacter
          </button>
        </div>
      </div>

      <Brain size={200} />
    </header>
  )
}