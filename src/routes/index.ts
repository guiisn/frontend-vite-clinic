import { clinicAdmRoutes } from "./ClinicAdmRoutes";
import { publicRoutes } from "./PublicRoutes";
import { superadminRoutes } from "./SuperadminRoutes";

export interface RoutesTypes {
  path: string;
  element: any;
  isPrivate?: boolean;
}

export const routes = [
  ...publicRoutes,
  ...superadminRoutes,
  ...clinicAdmRoutes,
];
