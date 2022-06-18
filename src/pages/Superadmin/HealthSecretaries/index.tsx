import { useState } from "react";
import { useQuery } from "react-query";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { superadminEndpoints } from "../../../utils/endpoints/superadmin";

export default function HealthSecretaries() {
  const api = new ApiService();
  const fetchClinics = async () => {
    return api.RequestData("GET", superadminEndpoints.listAllHealthSecretaries);
  };

  const [secretaries, setSecretaries] = useState([]);

  const { isLoading } = useQuery("clinics", fetchClinics, {
    onSuccess(data: any) {
      setSecretaries(data);
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <Listing
      data={secretaries}
      isLoading={isLoading}
      textButton="Cadastrar Secretário de Saúde"
      title="Esses são os Secretários de Saúde cadastrados."
      link="/superadmin/health-secretaries/create"
      type="healthSecretary"
    />
  );
}
