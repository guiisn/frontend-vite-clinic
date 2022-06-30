export const clinicAdmEndpoints = {
  listAllClinicAdministrators: (clinic_id: string) =>
    `/clinic-adm/clinic/${clinic_id}`,
  createClinicAdm: "/clinic-adm",
  createTherapist: "/therapist",
  listAllTherapists: (clinic_id: string) => `/therapist/${clinic_id}`,
  listAllProcedures: (clinic_id: string) => `/procedure/${clinic_id}`,
  createProcedure: "/procedure",
  listAllPatients: (clinic_id: string) => `/patients/${clinic_id}`,
  createPatient: "/patients",
  listAllCoordinators: (clinic_id: string) => `/coordinators/${clinic_id}`,
  createCoordinators: "/coordinators",
  listAllAdmSecretaries: (clinic_id: string) => `/adm-secretary/${clinic_id}`,
  createAdmSecretary: "/adm-secretary",
};
