import LoginPage from "../../pages/Login";
import PageNotFound from "../../pages/PageNotFound";

export const publicRoutes = [
  {
    path: "/",
    element: LoginPage,
    isPrivate: false,
  },
  {
    path: "*",
    element: PageNotFound,
    isPrivate: false,
  },
];
