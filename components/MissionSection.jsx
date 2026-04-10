import { Users, Sparkles, MessageSquare, Shield } from 'lucide-react'
import Card from './card'

export default function MissionSection() {
  const items = [
    {
      icon: <Users />,
      title: 'Sensibilisation',
      desc: 'Sensibiliser à la santé mentale',
    },
    {
      icon: <Sparkles />,
      title: 'Déstigmatisation',
      desc: 'Briser les tabous',
    },
    {
      icon: <MessageSquare />,
      title: 'Dialogue',
      desc: 'Créer des espaces sécurisés',
    },
    {
      icon: <Shield />,
      title: 'Prévention',
      desc: 'Encourager les solutions pro',
    },
  ]

  return (
    <section className="section">
      <h2>Notre Mission</h2>

      <div className="grid">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section>
  )
}