import { ApiService } from "../../../../config/api";
import { superadminEndpoints } from "../../../../utils/endpoints/superadmin";

interface IRemove {
  id: string;
}

const api = new ApiService();

export const removeClinic = async (id: string) => {
  return await api.RequestData("DELETE", `/clinic/${id}`, {});
};

export const removeHealthSecretary = async (id: string) => {
  return await api.RequestData("DELETE", `/health-secretaries/${id}`, {});
};

export const removeClinicAdm = async (id: string) => {
  return await api.RequestData("DELETE", `/clinic-adm/${id}`, {});
};

export const removeProcedures = async (id: string) => {
  return await api.RequestData("DELETE", `/procedure/${id}`, {});
};

export const removePatients = async (id: string) => {
  return await api.RequestData("DELETE", `/patients/${id}`, {});
};

export const removeCoordinators = async (id: string) => {
  return await api.RequestData("DELETE", `/coordinators/${id}`, {});
};

export const removeAdministrativeSecretaries = async (id: string) => {
  return await api.RequestData("DELETE", `/adm-secretary/${id}`, {});
};

export const removeTherapists = async (id: string) => {
  return await api.RequestData("DELETE", `/therapist/${id}`, {});
};
