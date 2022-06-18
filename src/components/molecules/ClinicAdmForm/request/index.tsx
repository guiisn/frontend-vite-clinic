import { IClinicAdm } from "..";
import { ApiService } from "../../../../config/api";
import { clinicAdmEndpoints } from "../../../../utils/endpoints/clinicAdm";
import { superadminEndpoints } from "../../../../utils/endpoints/superadmin";

export const createClinicAdm = async (data: IClinicAdm) => {
  const api = new ApiService();

  return await api.RequestData(
    "POST",
    clinicAdmEndpoints.createClinicAdm,
    data
  );
};
