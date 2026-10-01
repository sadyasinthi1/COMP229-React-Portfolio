import PageHeader from '../components/PageHeader';

/*
 * Services offered through the portfolio.
 * Keeping the service information here makes this page
 * easier to understand and update.
 */
const services = [
  {
    icon: '📊',
    title: 'Data Analytics & Visualization',
    description:
      'Data preparation, SQL analysis, dashboards, reporting, and insight communication using tools such as Power BI and Tableau.',
  },

  {
    icon: '💻',
    title: 'Full-Stack Web Development',
    description:
      'Responsive web applications using React, JavaScript, Node.js, REST APIs, and database technologies.',
  },

  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description:
      'Machine learning prototypes, predictive models, and AI-enabled applications using Python and modern AI technologies.',
  },

  {
    icon: '✅',
    title: 'QA & Software Testing',
    description:
      'Functional testing, defect identification, validation workflows, and quality-focused support for software applications.',
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Services I Offer"
        description="I provide technical services across data, software development, artificial intelligence, and software quality."
      />

      <section className="services-grid page-shell">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}