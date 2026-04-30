import { DataTable } from "../components/DataTable";
import { FormCard } from "../components/FormCard";
import { SectionHeader } from "../components/SectionHeader";

const columns = [
  { key: "patient", label: "Patient" },
  { key: "doctor", label: "Doctor" },
  { key: "slot", label: "Date & Time" },
  { key: "status", label: "Status" }
];

export function AppointmentsPage({
  appointments,
  patients,
  doctors,
  form,
  onChange,
  onSubmit
}) {
  const rows = appointments.map((appointment) => ({
    id: appointment._id,
    patient: appointment.patient?.fullName || "Unknown",
    doctor: appointment.doctor?.fullName || "Unknown",
    slot: `${appointment.date} • ${appointment.time}`,
    status: appointment.status
  }));

  return (
    <div className="page-stack page-grid">
      <div>
        <SectionHeader
          title="Appointment Desk"
          description="Schedule consultations between registered patients and doctors."
        />
        <DataTable
          rows={rows}
          columns={columns}
          emptyMessage="No appointments scheduled."
        />
      </div>

      <FormCard
        title="Book Appointment"
        description="Assign a doctor and timeslot for the patient visit."
      >
        <form className="form-grid" onSubmit={onSubmit}>
          <select name="patient" value={form.patient} onChange={onChange} required>
            <option value="">Select patient</option>
            {patients.map((patient) => (
              <option key={patient._id} value={patient._id}>
                {patient.fullName}
              </option>
            ))}
          </select>
          <select name="doctor" value={form.doctor} onChange={onChange} required>
            <option value="">Select doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.fullName}
              </option>
            ))}
          </select>
          <input name="date" type="date" value={form.date} onChange={onChange} required />
          <input name="time" placeholder="10:30 AM" value={form.time} onChange={onChange} required />
          <input name="purpose" placeholder="Purpose" value={form.purpose} onChange={onChange} required />
          <select name="status" value={form.status} onChange={onChange}>
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button type="submit">Schedule Appointment</button>
        </form>
      </FormCard>
    </div>
  );
}
