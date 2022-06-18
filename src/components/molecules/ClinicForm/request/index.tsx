import { useLocation, useNavigate } from "react-router-dom";
import { IClinic } from "..";
import { ApiService } from "../../../../config/api";
import { superadminEndpoints } from "../../../../utils/endpoints/superadmin";

export const createClinic = async (data: IClinic) => {
  const { street, number, district, name, nameAdm, email, password } = data;

  const api = new ApiService();

  const address: any = await api.RequestData(
    "POST",
    superadminEndpoints.createAddress,
    { street, number, district }
  );

  const clinic: any = await api.RequestData(
    "POST",
    superadminEndpoints.createClinic,
    { name, address_id: address.id }
  );

  const adm = await api.RequestData(
    "POST",
    superadminEndpoints.createClinicAdm,
    { name: nameAdm, email, password, clinic_id: clinic.id }
  );

  return adm;
};

export const onSuccess = () => {
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  return role;
};
