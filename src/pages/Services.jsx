import PageHeader from '../components/PageHeader';
import { services } from '../data/portfolioData';

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="How I can contribute"
        description="Technical services based on my software development, data and QA experience."
      />
      <section className="service-grid page-shell">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon" aria-hidden="true">{service.icon}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
