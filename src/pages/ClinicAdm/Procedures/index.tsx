import { useState } from "react";
import { useQuery } from "react-query";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export default function Procedures() {
  const [procedures, setProcedures] = useState([]);

  const fetchProcedures = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllProcedures(getClinicID())
    );
  };

  const { isLoading } = useQuery("therapists", fetchProcedures, {
    onSuccess(data: any) {
      setProcedures(data);
    },
    onError(err) {
      alert(err);
    },
  });

  return (
    <Listing
      textButton="Cadastrar Procedimento"
      title="Esses são os Procedimentos cadastrados."
      data={procedures}
      type="procedures"
      isLoading={isLoading}
      link="/clinicAdm/procedures/create"
    />
  );
}
