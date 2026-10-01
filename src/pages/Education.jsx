import PageHeader from '../components/PageHeader';

/*
 * Education and professional qualifications displayed on the portfolio.
 */
const education = [
  {
    credential: 'Software Engineering Technician (AI Program)',
    institution: 'Centennial College',
    dates: '2022',
    detail:
      'Focused on software development, artificial intelligence, programming, databases, web development, and application development.',
  },
  {
    credential: 'Certificate in French Language Studies',
    institution: 'Alliance Française de Dhaka',
    dates: '2018 – 2021',
    detail:
      'Completed French language studies with a focus on written and verbal communication.',
  },
];

export default function Education() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Education & Qualifications"
        description="My education combines software engineering, artificial intelligence, and language studies."
      />

      <section className="timeline page-shell">
        {education.map((item) => (
          <article
            className="timeline-item"
            key={`${item.credential}-${item.institution}`}
          >
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