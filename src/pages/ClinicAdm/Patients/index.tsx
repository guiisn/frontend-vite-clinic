import { useState } from "react";
import { useQuery } from "react-query";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export default function Patients() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllPatients(getClinicID())
    );
  };

  const { isLoading } = useQuery("patients", fetchPatients, {
    onSuccess(data: any) {
      setPatients(data);
    },
    onError(err) {
      alert(err);
    },
  });

  return (
    <Listing
      textButton="Cadastrar Paciente"
      title="Esses são os Pacientes cadastrados."
      data={patients}
      type="patients"
      isLoading={isLoading}
      link="/clinicAdm/patients/create"
    />
  );
}
