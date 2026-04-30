import { MetricCard } from "../components/MetricCard";
import { SectionHeader } from "../components/SectionHeader";

export function DashboardPage({ dashboard }) {
  const stats = dashboard?.stats || {
    patients: 0,
    doctors: 0,
    appointments: 0,
    pendingBills: 0,
    revenue: 0
  };

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Smart Hospital Management</p>
          <h2>Run admissions, consultation schedules, and billing from one place.</h2>
          <p>
            This MERN system gives hospital staff a compact admin console for
            daily operations with live data from MongoDB.
          </p>
        </div>
        <div className="hero-badge">24/7 Care Operations</div>
      </section>

      <SectionHeader
        title="Hospital Overview"
        description="Track the most important operational numbers across the facility."
      />

      <div className="metrics-grid">
        <MetricCard label="Total Patients" value={stats.patients} accent="#ff7b54" />
        <MetricCard label="Doctors" value={stats.doctors} accent="#1f7aec" />
        <MetricCard label="Appointments" value={stats.appointments} accent="#24b47e" />
        <MetricCard label="Pending Bills" value={stats.pendingBills} accent="#8e5cf7" />
        <MetricCard label="Revenue" value={`Rs. ${stats.revenue}`} accent="#e09f3e" />
      </div>

      <section className="recent-card">
        <SectionHeader
          title="Recent Patients"
          description="New admissions and the latest changes in patient activity."
        />
        <div className="recent-list">
          {(dashboard?.recentPatients || []).map((patient) => (
            <article key={patient._id} className="recent-patient">
              <div>
                <h4>{patient.fullName}</h4>
                <p>
                  {patient.disease} • {patient.status}
                </p>
              </div>
              <span>{patient.bloodGroup}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
