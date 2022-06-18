import AdministrativeSecretaries from "../../pages/ClinicAdm/AdministrativeSecretaries";
import ClinicAdms from "../../pages/ClinicAdm/ClinicAdms";
import CreateClinicAdm from "../../pages/ClinicAdm/ClinicAdms/CreateClinicAdm";
import Coordinators from "../../pages/ClinicAdm/Coordinators";
import Dashboard from "../../pages/ClinicAdm/Dashboard";
import Patients from "../../pages/ClinicAdm/Patients";
import Procedures from "../../pages/ClinicAdm/Procedures";
import Therapists from "../../pages/ClinicAdm/Therapists";

const identify = "clinicAdm";

export const clinicAdmRoutes = [
  {
    path: `/${identify}/dashboard`,
    element: Dashboard,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinic-adms`,
    element: ClinicAdms,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinic-adm/create`,
    element: CreateClinicAdm,
    isPrivate: true,
  },
  {
    path: `/${identify}/procedures`,
    element: Procedures,
    isPrivate: true,
  },
  {
    path: `/${identify}/patients`,
    element: Patients,
    isPrivate: true,
  },
  {
    path: `/${identify}/coordinators`,
    element: Coordinators,
    isPrivate: true,
  },
  {
    path: `/${identify}/administrative-secretaries`,
    element: AdministrativeSecretaries,
    isPrivate: true,
  },
  {
    path: `/${identify}/therapists`,
    element: Therapists,
    isPrivate: true,
  },
];
