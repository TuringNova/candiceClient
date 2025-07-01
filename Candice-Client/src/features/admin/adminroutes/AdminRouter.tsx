import type { RouteObject } from "react-router";

import AdminLayout from "../adminLayout/AdminLayout";
import AllClients from "../adminPages/AllClients";

const routes: RouteObject[] = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "all-clients",
        element: <AllClients />,
      },
    ],
  },
];
export default routes;
