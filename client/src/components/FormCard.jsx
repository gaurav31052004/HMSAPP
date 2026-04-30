export function FormCard({ title, description, children }) {
  return (
    <section className="form-card">
      <div className="form-card-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}
