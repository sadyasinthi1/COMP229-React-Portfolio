import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Sadya Hossain Sinthi"
        description="A data analyst and software developer who enjoys turning complex technical problems into clear, useful solutions."
      />

      <section className="about-grid page-shell">
        <div className="profile-card">
          <img
            className="profile-image"
            src="/profile-placeholder.jpeg"
            alt="Sadya Hossain Sinthi"
          />
         
        </div>

        <div className="about-copy">
          <h2>My background</h2>
          <p>
            I have a software engineering foundation and hands-on experience in data analytics, machine learning, full-stack development and QA/testing. My work spans technical development and business-facing communication, helping me translate complex information into practical digital solutions.
          </p>
          <p>
            I have built AI-enabled applications, predictive machine-learning prototypes, real-time web applications and analytics solutions. I’m especially interested in projects where data, software and user experience come together to solve real problems.
          </p>
          <a className="button primary" href="/resume-sadya-sinthi.pdf" target="_blank" rel="noreferrer">
            View PDF Résumé
          </a>
        </div>
      </section>
    </>
  );
}
