import { ApiService } from "../../../../config/api";
import { clinicAdmEndpoints } from "../../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../../utils/functions/GetClinicID";

interface ISecretary {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const createTherapist = async (data: ISecretary) => {
  const api = new ApiService();

  const dataToSend = {
    ...data,
    clinic_id: getClinicID(),
  };

  return await api.RequestData(
    "POST",
    clinicAdmEndpoints.createTherapist,
    dataToSend
  );
};
