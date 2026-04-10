export default function Card({ icon, title, desc, children }) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {desc && <p className="card-desc">{desc}</p>}
      {children}
    </div>
  )
}