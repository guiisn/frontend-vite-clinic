import { ApiService } from "../../../../config/api";
import { clinicAdmEndpoints } from "../../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../../utils/functions/GetClinicID";

interface IPatient {
  name: string;
  sus_card: string;
  phone: string;
  cpf: string;
  birth_date: string;
}

export const createPatient = async (data: IPatient) => {
  const api = new ApiService();

  const dataToSend = {
    ...data,
    clinic_id: getClinicID(),
  };

  return await api.RequestData(
    "POST",
    clinicAdmEndpoints.createPatient,
    dataToSend
  );
};
