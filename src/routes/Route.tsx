import { ReactElement } from "react";

import { RouteProps as ReactRouterProps, Navigate } from "react-router-dom";

interface RouteProps extends ReactRouterProps {
  children: ReactElement<Element>;
  redirectTo: string;
}

export default function PrivateRoute({ children, redirectTo }: RouteProps) {
  const user = localStorage.getItem("@iCer:user");

  return user ? children : <Navigate to={redirectTo} />;
}
