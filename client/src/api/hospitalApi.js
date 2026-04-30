const API_URL = "http://localhost:5000/api";

const request = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

export const hospitalApi = {
  getDashboard: () => request("/dashboard"),
  getPatients: () => request("/patients"),
  createPatient: (payload) =>
    request("/patients", {
      method: "POST",
      body: JSON.stringify(payload)
    }),
  getDoctors: () => request("/doctors"),
  createDoctor: (payload) =>
    request("/doctors", {
      method: "POST",
      body: JSON.stringify(payload)
    }),
  getAppointments: () => request("/appointments"),
  createAppointment: (payload) =>
    request("/appointments", {
      method: "POST",
      body: JSON.stringify(payload)
    }),
  getBills: () => request("/bills"),
  createBill: (payload) =>
    request("/bills", {
      method: "POST",
      body: JSON.stringify(payload)
    })
};
