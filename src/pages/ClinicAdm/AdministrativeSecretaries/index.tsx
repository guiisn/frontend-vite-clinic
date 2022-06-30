import { useState } from "react";
import { useQuery } from "react-query";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export default function AdministrativeSecretaries() {
  const [admSecretaries, setAdmSecretaries] = useState([]);

  const fetchAdmSecretaries = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllAdmSecretaries(getClinicID())
    );
  };

  const { isLoading } = useQuery("adm-secretaries", fetchAdmSecretaries, {
    onSuccess(data: any) {
      setAdmSecretaries(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  return (
    <Listing
      textButton="Cadastrar Secretário Adm."
      title="Esses são os Secretários cadastrados."
      data={admSecretaries}
      type="admSecretaries"
      isLoading={isLoading}
      link="/clinicAdm/clinic-adm/create"
    />
  );
}
