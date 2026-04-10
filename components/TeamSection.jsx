import Card from './card'

export default function TeamSection() {
  const members = [
    { name: 'Chedi Ben Salem', role: 'president' },
    { name: 'Ahmed Ben Mim', role: 'vice-president' },
  ]

  return (
    <section className="section light">
      <h2>Notre Équipe</h2>

      <div className="grid">
        {members.map((m, i) => (
          <Card key={i}>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            <p>{m.phone}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}