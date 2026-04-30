const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "patients", label: "Patients" },
  { id: "doctors", label: "Doctors" },
  { id: "appointments", label: "Appointments" },
  { id: "billing", label: "Billing" }
];

export function Layout({ activeView, setActiveView, children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">MERN Stack Project</p>
          <h1>PulseCare HMS</h1>
          <p className="sidebar-copy">
            Manage patient records, doctors, appointments, and billing from one
            clean hospital dashboard.
          </p>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={item.id === activeView ? "nav-button active" : "nav-button"}
              onClick={() => setActiveView(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content-area">{children}</main>
    </div>
  );
}
