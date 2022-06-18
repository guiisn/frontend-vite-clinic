import { useState } from "react";
import { useQuery } from "react-query";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { superadminEndpoints } from "../../../utils/endpoints/superadmin";

export default function Clinics() {
  const api = new ApiService();
  const fetchClinics = async () => {
    return api.RequestData("GET", superadminEndpoints.listAllClinics);
  };

  const [clinics, setClinics] = useState([]);

  const { isLoading } = useQuery("clinics", fetchClinics, {
    onSuccess(data: any) {
      setClinics(data);
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <Listing
      isLoading={isLoading}
      data={clinics}
      title="Essas são as Clínicas cadastradas."
      textButton="Cadastrar Clínica"
      link="/superadmin/clinic/create"
      type="clinic"
    />
  );
}
