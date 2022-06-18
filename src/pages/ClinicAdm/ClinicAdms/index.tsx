import { useState } from "react";
import { useQuery } from "react-query";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export default function ClinicAdms() {
  const [clinicAdms, setClinicAdms] = useState([]);

  const fetchClinicAdms = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllClinicAdministrators(getClinicID())
    );
  };

  const { isLoading } = useQuery("adms", fetchClinicAdms, {
    onSuccess(data: any) {
      setClinicAdms(data);
    },
    onError(err) {
      alert(err);
    },
  });

  return (
    <Listing
      textButton="Cadastrar Administrador"
      title="Esses são os Administradores de sua Clínica"
      data={clinicAdms}
      type="clinicAdms"
      isLoading={isLoading}
      link="/clinicAdm/clinic-adm/create"
    />
  );
}
