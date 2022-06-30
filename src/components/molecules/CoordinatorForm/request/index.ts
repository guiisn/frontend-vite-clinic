import { ICoordinator } from "..";
import { ApiService } from "../../../../config/api";
import { clinicAdmEndpoints } from "../../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../../utils/functions/GetClinicID";

export const createCoordinators = async (data: ICoordinator) => {
  const api = new ApiService();

  const { name, email, password } = data;

  const dataToSend = {
    name,
    email,
    password,
    clinic_id: getClinicID(),
  };

  return await api.RequestData(
    "POST",
    clinicAdmEndpoints.createCoordinators,
    dataToSend
  );
};
