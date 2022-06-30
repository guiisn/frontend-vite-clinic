import { ApiService } from "../../../../config/api";
import { clinicAdmEndpoints } from "../../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../../utils/functions/GetClinicID";

interface ISecretary {
  code: string;
  name: string;
}

export const createProcedure = async (data: ISecretary) => {
  const api = new ApiService();

  const dataToSend = {
    ...data,
    clinic_id: getClinicID(),
  };

  return await api.RequestData(
    "POST",
    clinicAdmEndpoints.createProcedure,
    dataToSend
  );
};
