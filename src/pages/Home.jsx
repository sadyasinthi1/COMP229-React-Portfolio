import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const contactSubmitted = location.state?.contactSubmitted;

  return (
    <>
      {contactSubmitted ? (
        <div className="success-banner" role="status">
          Thanks! Your message was captured successfully.
        </div>
      ) : null}

      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            Data Analyst • Software Developer • Public Servant
          </p>

          <h1>
            Turning complex data into useful digital products for Ontarians.
          </h1>

          <p className="hero-text">
            Welcome to my portfolio. I’m Sadya Hossain Sinthi, a
            Data Analyst working for the Government of Ontario with experience across
            data analytics, software development, machine learning and
            quality assurance.
          </p>

          <div className="button-row">
            <Link className="button primary" to="/about">
              About Me
            </Link>

            <Link className="button secondary" to="/projects">
              View Projects
            </Link>

            <a
              className="button secondary"
              href="https://www.sadyasinthi.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit My Primary Portfolio
            </a>
          </div>
        </div>

        <aside className="mission-card" aria-label="Mission statement">
          <p className="eyebrow">Mission Statement</p>

          <h2>
            At Ontario Public Service, I build data, analytics, and AI-driven solutions that make information more accessible, understandable, and actionable for teams across government.
          </h2>

          <p>
            I combine technical development with a practical business
            perspective to create accessible, reliable and user-focused
            solutions for Ontarians.
          </p>
        </aside>
      </section>

      <section className="home-highlights page-shell">
        <div>
          <strong>Data</strong>
          <span>Analytics, SQL, Power BI</span>
        </div>

        <div>
          <strong>Development</strong>
          <span>React, JavaScript, Node.js</span>
        </div>

        <div>
          <strong>AI / ML</strong>
          <span>Python, PyTorch, Scikit-learn</span>
        </div>
      </section>
    </>
  );
}