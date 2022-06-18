import { ApiService } from "../../../../config/api";
import { superadminEndpoints } from "../../../../utils/endpoints/superadmin";

interface IRemove {
  id: string;
}

export const removeClinic = async (id: string) => {
  const api = new ApiService();
  return await api.RequestData("DELETE", `/clinic/${id}`, {});
};

export const removeHealthSecretary = async (id: string) => {
  const api = new ApiService();

  return await api.RequestData("DELETE", `/health-secretaries/${id}`, {});
};
