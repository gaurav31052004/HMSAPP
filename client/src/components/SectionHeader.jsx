export function SectionHeader({ title, description }) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">Operations</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
