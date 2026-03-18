import Reveal from './Reveal'

function TestimonialCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay} className="testimonial-card">
      <p>"{item.text}"</p>
      <div>
        <strong>{item.name}</strong>
        <span>{item.role}</span>
      </div>
    </Reveal>
  )
}

export default TestimonialCard
