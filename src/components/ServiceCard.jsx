import Reveal from './Reveal'

function ServiceCard({ service, delay = 0 }) {
  return (
    <Reveal delay={delay} className="service-card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <span className="price-tag">From {service.price}</span>
    </Reveal>
  )
}

export default ServiceCard
