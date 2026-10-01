export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="page-header page-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description ? <p className="page-intro">{description}</p> : null}
    </section>
  );
}
