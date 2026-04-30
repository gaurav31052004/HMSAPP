import { useEffect, useState } from "react";
import { hospitalApi } from "./api/hospitalApi";
import { Layout } from "./components/Layout";
import { AppointmentsPage } from "./pages/AppointmentsPage";
import { BillingPage } from "./pages/BillingPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DoctorsPage } from "./pages/DoctorsPage";
import { PatientsPage } from "./pages/PatientsPage";

const initialPatientForm = {
  fullName: "",
  age: "",
  gender: "Male",
  phone: "",
  bloodGroup: "",
  disease: "",
  address: "",
  emergencyContact: "",
  status: "Admitted"
};

const initialDoctorForm = {
  fullName: "",
  department: "",
  specialization: "",
  phone: "",
  email: "",
  availability: ""
};

const initialAppointmentForm = {
  patient: "",
  doctor: "",
  date: "",
  time: "",
  purpose: "",
  status: "Scheduled"
};

const initialBillForm = {
  patient: "",
  amount: "",
  description: "",
  paymentStatus: "Pending",
  paymentMethod: "Cash"
};

function App() {
  const [activeView, setActiveView] = useState("dashboard");
  const [dashboard, setDashboard] = useState(null);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [bills, setBills] = useState([]);
  const [patientForm, setPatientForm] = useState(initialPatientForm);
  const [doctorForm, setDoctorForm] = useState(initialDoctorForm);
  const [appointmentForm, setAppointmentForm] = useState(initialAppointmentForm);
  const [billForm, setBillForm] = useState(initialBillForm);
  const [status, setStatus] = useState("Loading hospital data...");

  const loadData = async () => {
    try {
      setStatus("Loading hospital data...");
      const [dashboardData, patientsData, doctorsData, appointmentsData, billsData] =
        await Promise.all([
          hospitalApi.getDashboard(),
          hospitalApi.getPatients(),
          hospitalApi.getDoctors(),
          hospitalApi.getAppointments(),
          hospitalApi.getBills()
        ]);

      setDashboard(dashboardData);
      setPatients(patientsData);
      setDoctors(doctorsData);
      setAppointments(appointmentsData);
      setBills(billsData);
      setStatus("Hospital data synced successfully.");
    } catch (_error) {
      setStatus(
        "Could not connect to the backend. Start the Express server and MongoDB, then refresh."
      );
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleFieldChange = (setter) => (event) => {
    const { name, value } = event.target;
    setter((current) => ({
      ...current,
      [name]: value
    }));
  };

  const withRefresh = async (action, reset) => {
    try {
      await action();
      reset();
      await loadData();
    } catch (error) {
      setStatus(error.message);
    }
  };

  const handlePatientSubmit = async (event) => {
    event.preventDefault();
    await withRefresh(
      () => hospitalApi.createPatient({ ...patientForm, age: Number(patientForm.age) }),
      () => setPatientForm(initialPatientForm)
    );
  };

  const handleDoctorSubmit = async (event) => {
    event.preventDefault();
    await withRefresh(
      () => hospitalApi.createDoctor(doctorForm),
      () => setDoctorForm(initialDoctorForm)
    );
  };

  const handleAppointmentSubmit = async (event) => {
    event.preventDefault();
    await withRefresh(
      () => hospitalApi.createAppointment(appointmentForm),
      () => setAppointmentForm(initialAppointmentForm)
    );
  };

  const handleBillSubmit = async (event) => {
    event.preventDefault();
    await withRefresh(
      () => hospitalApi.createBill({ ...billForm, amount: Number(billForm.amount) }),
      () => setBillForm(initialBillForm)
    );
  };

  return (
    <Layout activeView={activeView} setActiveView={setActiveView}>
      <div className="status-banner">{status}</div>

      {activeView === "dashboard" && <DashboardPage dashboard={dashboard} />}
      {activeView === "patients" && (
        <PatientsPage
          patients={patients}
          form={patientForm}
          onChange={handleFieldChange(setPatientForm)}
          onSubmit={handlePatientSubmit}
        />
      )}
      {activeView === "doctors" && (
        <DoctorsPage
          doctors={doctors}
          form={doctorForm}
          onChange={handleFieldChange(setDoctorForm)}
          onSubmit={handleDoctorSubmit}
        />
      )}
      {activeView === "appointments" && (
        <AppointmentsPage
          appointments={appointments}
          patients={patients}
          doctors={doctors}
          form={appointmentForm}
          onChange={handleFieldChange(setAppointmentForm)}
          onSubmit={handleAppointmentSubmit}
        />
      )}
      {activeView === "billing" && (
        <BillingPage
          bills={bills}
          patients={patients}
          form={billForm}
          onChange={handleFieldChange(setBillForm)}
          onSubmit={handleBillSubmit}
        />
      )}
    </Layout>
  );
}

export default App;
