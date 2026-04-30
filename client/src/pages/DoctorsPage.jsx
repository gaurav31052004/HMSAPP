import { DataTable } from "../components/DataTable";
import { FormCard } from "../components/FormCard";
import { SectionHeader } from "../components/SectionHeader";

const columns = [
  { key: "name", label: "Doctor" },
  { key: "specialization", label: "Specialization" },
  { key: "department", label: "Department" },
  { key: "availability", label: "Availability" }
];

export function DoctorsPage({ doctors, form, onChange, onSubmit }) {
  const rows = doctors.map((doctor) => ({
    id: doctor._id,
    name: doctor.fullName,
    specialization: doctor.specialization,
    department: doctor.department,
    availability: doctor.availability
  }));

  return (
    <div className="page-stack page-grid">
      <div>
        <SectionHeader
          title="Doctor Directory"
          description="Maintain hospital departments, contacts, and schedules."
        />
        <DataTable rows={rows} columns={columns} emptyMessage="No doctors yet." />
      </div>

      <FormCard
        title="Add Doctor"
        description="Create a doctor record with department and availability details."
      >
        <form className="form-grid" onSubmit={onSubmit}>
          <input name="fullName" placeholder="Doctor name" value={form.fullName} onChange={onChange} required />
          <input name="department" placeholder="Department" value={form.department} onChange={onChange} required />
          <input
            name="specialization"
            placeholder="Specialization"
            value={form.specialization}
            onChange={onChange}
            required
          />
          <input name="phone" placeholder="Phone number" value={form.phone} onChange={onChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
          <input
            name="availability"
            placeholder="Availability"
            value={form.availability}
            onChange={onChange}
            required
          />
          <button type="submit">Save Doctor</button>
        </form>
      </FormCard>
    </div>
  );
}
