import { ApiService } from "../../../../config/api";
import { superadminEndpoints } from "../../../../utils/endpoints/superadmin";

interface ISecretary {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const createHealthSecretary = async (data: ISecretary) => {
  const api = new ApiService();

  return await api.RequestData(
    "POST",
    superadminEndpoints.createHealthSecretary,
    data
  );
};
