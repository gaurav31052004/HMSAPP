export function MetricCard({ label, value, accent }) {
  return (
    <article className="metric-card">
      <span className="metric-accent" style={{ background: accent }} />
      <p>{label}</p>
      <h3>{value}</h3>
    </article>
  );
}
