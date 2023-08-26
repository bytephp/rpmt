import {
  AuthBindings,
  Authenticated,
  Refine,
} from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  ThemedLayoutV2,
  ThemedSiderV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import nestjsxCrudDataProvider from "@refinedev/nestjsx-crud";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { CredentialResponse } from "./interfaces/google";

import { ProjectCreate, ProjectEdit, ProjectList, ProjectShow, } from "./pages/project";
import { BuildingCreate, BuildingEdit, BuildingList, BuildingShow, } from "./pages/building";
import { BuildingUnitCreate, BuildingUnitEdit, BuildingUnitList, BuildingUnitShow, } from "./pages/building-unit";
import { LandlordCreate, LandlordEdit, LandlordList, LandlordShow, } from "./pages/landlord";
import { TenantCreate, TenantEdit, TenantList, TenantShow, } from "./pages/tenant";

import { Login } from "./pages/login";
import { parseJwt } from "./utils/parse-jwt";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  const { t, i18n } = useTranslation();

  const API_URL = "http://localhost:4000";
  const dataProvider = nestjsxCrudDataProvider(API_URL);

  const authProvider: AuthBindings = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      if (profileObj) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...profileObj,
            avatar: profileObj.picture,
          })
        );

        localStorage.setItem("token", `${credential}`);

        return {
          success: true,
          redirectTo: "/",
        };
      }

      return {
        success: false,
      };
    },
    logout: async () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return {};
        });
      }

      return {
        success: true,
        redirectTo: "/login",
      };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return {
          authenticated: true,
        };
      }

      return {
        authenticated: false,
        error: {
          message: "Check failed",
          name: "Token not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }

      return null;
    },
  };

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <Refine
            dataProvider={dataProvider}
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            resources={[
              {
                name: "project",
                list: "/project",
                create: "/project/create",
                edit: "/project/edit/:id",
                show: "/project/show/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "building",
                list: "/building",
                create: "/building/create",
                edit: "/building/edit/:id",
                show: "/building/show/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "building-unit",
                list: "/building-unit",
                create: "/building-unit/create",
                edit: "/building-unit/edit/:id",
                show: "/building-unit/show/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "landlord",
                list: "/landlord",
                create: "/landlord/create",
                edit: "/landlord/edit/:id",
                show: "/landlord/show/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "tenant",
                list: "/tenant",
                create: "/tenant/create",
                edit: "/tenant/edit/:id",
                show: "/tenant/show/:id",
                meta: {
                  canDelete: true,
                },
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "n8pZ7N-JxyPQa-SlKP4b",
            }}
          >
            <Routes>
              <Route
                element={
                  <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                    <ThemedLayoutV2
                      Header={() => <Header sticky />}
                      Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                    >
                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="blog_posts" />}
                />
                <Route path="/project">
                  <Route index element={<ProjectList />} />
                  <Route path="create" element={<ProjectCreate />} />
                  <Route path="edit/:id" element={<ProjectEdit />} />
                  <Route path="show/:id" element={<ProjectShow />} />
                </Route>
                <Route path="/building">
                  <Route index element={<BuildingList />} />
                  <Route path="create" element={<BuildingCreate />} />
                  <Route path="edit/:id" element={<BuildingEdit />} />
                  <Route path="show/:id" element={<BuildingShow />} />
                </Route>
                <Route path="/building-unit">
                  <Route index element={<BuildingUnitList />} />
                  <Route path="create" element={<BuildingUnitCreate />} />
                  <Route path="edit/:id" element={<BuildingUnitEdit />} />
                  <Route path="show/:id" element={<BuildingUnitShow />} />
                </Route>
                <Route path="/landlord">
                  <Route index element={<LandlordList />} />
                  <Route path="create" element={<LandlordCreate />} />
                  <Route path="edit/:id" element={<LandlordEdit />} />
                  <Route path="show/:id" element={<LandlordShow />} />
                </Route>
                <Route path="/tenant">
                  <Route index element={<TenantList />} />
                  <Route path="create" element={<TenantCreate />} />
                  <Route path="edit/:id" element={<TenantEdit />} />
                  <Route path="show/:id" element={<TenantShow />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
              <Route
                element={
                  <Authenticated fallback={<Outlet />}>
                    <NavigateToResource />
                  </Authenticated>
                }
              >
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>

            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
