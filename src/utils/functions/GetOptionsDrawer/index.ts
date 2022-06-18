import { clinicAdminOptions } from "../../UsersPermissions/ClinicAdm";
import { superadminOptions } from "../../UsersPermissions/Superadmin";

export const getOptionsDrawer = (path: string) => {
  const pathSplited = path.split("/")[1];

  switch (pathSplited) {
    case "superadmin":
      return superadminOptions;
    case "clinicAdm":
      return clinicAdminOptions;
  }
};
