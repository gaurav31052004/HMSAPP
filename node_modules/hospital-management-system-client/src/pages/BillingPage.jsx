import { DataTable } from "../components/DataTable";
import { FormCard } from "../components/FormCard";
import { SectionHeader } from "../components/SectionHeader";

const columns = [
  { key: "patient", label: "Patient" },
  { key: "description", label: "Description" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Payment Status" }
];

export function BillingPage({ bills, patients, form, onChange, onSubmit }) {
  const rows = bills.map((bill) => ({
    id: bill._id,
    patient: bill.patient?.fullName || "Unknown",
    description: bill.description,
    amount: `Rs. ${bill.amount}`,
    status: bill.paymentStatus
  }));

  return (
    <div className="page-stack page-grid">
      <div>
        <SectionHeader
          title="Billing Center"
          description="Monitor invoices, pending collections, and payment modes."
        />
        <DataTable rows={rows} columns={columns} emptyMessage="No bills yet." />
      </div>

      <FormCard
        title="Create Bill"
        description="Generate a billing entry for treatment, scans, or consultation."
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
          <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={onChange} required />
          <input
            name="description"
            placeholder="Bill description"
            value={form.description}
            onChange={onChange}
            required
          />
          <select name="paymentStatus" value={form.paymentStatus} onChange={onChange}>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Partially Paid">Partially Paid</option>
          </select>
          <select name="paymentMethod" value={form.paymentMethod} onChange={onChange}>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
            <option value="Insurance">Insurance</option>
          </select>
          <button type="submit">Save Bill</button>
        </form>
      </FormCard>
    </div>
  );
}
