import type { RouteObject } from "react-router";
import LoginPage from "./Login";
import SignupPage from "./Signup";
import AuthLayout from "./layout/AuthLayout";

const routes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
];

export default routes;
