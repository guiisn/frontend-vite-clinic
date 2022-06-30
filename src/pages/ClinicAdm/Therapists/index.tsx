import { useState } from "react";
import { useQuery } from "react-query";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export default function Therapists() {
  const [therapists, setTherapists] = useState([]);

  const fetchTherapists = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllTherapists(getClinicID())
    );
  };

  const { isLoading } = useQuery("therapists", fetchTherapists, {
    onSuccess(data: any) {
      setTherapists(data);
    },
    onError(err) {
      alert(err);
    },
  });

  return (
    <Listing
      textButton="Cadastrar Terapeuta"
      title="Esses são os Terapeutas cadastrados."
      data={therapists}
      type="therapists"
      isLoading={isLoading}
      link="/clinicAdm/therapists/create"
    />
  );
}
