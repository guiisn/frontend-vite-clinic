import { useState } from "react";
import { useQuery } from "react-query";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export default function Coordinators() {
  const [coordinators, setCoordinators] = useState([]);

  const fetchCoordinators = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllCoordinators(getClinicID())
    );
  };

  const { isLoading } = useQuery("coordinators", fetchCoordinators, {
    onSuccess(data: any) {
      setCoordinators(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  return (
    <Listing
      textButton="Cadastrar Coordenador"
      title="Esses são os Coordenadores cadastrados."
      data={coordinators}
      type="coordinators"
      isLoading={isLoading}
      link="/clinicAdm/coordinators/create"
    />
  );
}
