import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "@mui/material";
import Layout from "./components/layout";
import LightTheme from "./themes/light";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes, RoutesTypes } from "./routes";
import PrivateRoute from "./routes/Route";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes &&
                routes.map((route: RoutesTypes, index: number) =>
                  !route.isPrivate ? (
                    <Route
                      path={route.path}
                      element={<route.element />}
                      key={index}
                    />
                  ) : (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <PrivateRoute redirectTo="/">
                          <route.element />
                        </PrivateRoute>
                      }
                    />
                  )
                )}
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
