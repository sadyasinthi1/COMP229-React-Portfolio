import PageHeader from '../components/PageHeader';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Education & qualifications"
        description="My education combines software engineering, business and engineering foundations."
      />
      <section className="timeline page-shell">
        {education.map((item) => (
          <article className="timeline-item" key={`${item.credential}-${item.institution}`}>
            <div className="timeline-dot" aria-hidden="true" />
            <div>
              <p className="eyebrow">{item.dates}</p>
              <h2>{item.credential}</h2>
              <p className="institution">{item.institution}</p>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
