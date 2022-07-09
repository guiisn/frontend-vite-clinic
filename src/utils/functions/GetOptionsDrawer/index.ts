import { admSecretaryOptions } from "../../UsersPermissions/AdmSecretary";
import { clinicAdminOptions } from "../../UsersPermissions/ClinicAdm";
import { coordinatorOptions } from "../../UsersPermissions/Coordinator";
import { superadminOptions } from "../../UsersPermissions/Superadmin";

export const getOptionsDrawer = (path: string) => {
  const pathSplited = path.split("/")[1];

  switch (pathSplited) {
    case "superadmin":
      return superadminOptions;
    case "clinicAdm":
      return clinicAdminOptions;
    case "coordinator":
      return coordinatorOptions;
    case "admnistrativeSecretary":
      return admSecretaryOptions
  }
};
