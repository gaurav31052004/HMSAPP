import { DataTable } from "../components/DataTable";
import { FormCard } from "../components/FormCard";
import { SectionHeader } from "../components/SectionHeader";

const columns = [
  { key: "name", label: "Patient" },
  { key: "disease", label: "Disease" },
  { key: "status", label: "Status" },
  { key: "contact", label: "Contact" }
];

export function PatientsPage({ patients, form, onChange, onSubmit }) {
  const rows = patients.map((patient) => ({
    id: patient._id,
    name: `${patient.fullName} (${patient.age})`,
    disease: patient.disease,
    status: patient.status,
    contact: patient.phone
  }));

  return (
    <div className="page-stack page-grid">
      <div>
        <SectionHeader
          title="Patient Registry"
          description="Add, review, and track admitted or discharged patients."
        />
        <DataTable rows={rows} columns={columns} emptyMessage="No patients yet." />
      </div>

      <FormCard
        title="Register Patient"
        description="Capture the key admission details for a new patient."
      >
        <form className="form-grid" onSubmit={onSubmit}>
          <input name="fullName" placeholder="Full name" value={form.fullName} onChange={onChange} required />
          <input name="age" type="number" placeholder="Age" value={form.age} onChange={onChange} required />
          <select name="gender" value={form.gender} onChange={onChange} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input name="phone" placeholder="Phone number" value={form.phone} onChange={onChange} required />
          <input name="bloodGroup" placeholder="Blood group" value={form.bloodGroup} onChange={onChange} required />
          <input name="disease" placeholder="Disease / issue" value={form.disease} onChange={onChange} required />
          <input name="address" placeholder="Address" value={form.address} onChange={onChange} required />
          <input
            name="emergencyContact"
            placeholder="Emergency contact"
            value={form.emergencyContact}
            onChange={onChange}
            required
          />
          <select name="status" value={form.status} onChange={onChange}>
            <option value="Admitted">Admitted</option>
            <option value="Under Observation">Under Observation</option>
            <option value="Discharged">Discharged</option>
          </select>
          <button type="submit">Save Patient</button>
        </form>
      </FormCard>
    </div>
  );
}
