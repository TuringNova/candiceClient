import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
import authRouter from "../features/auth/authRouter";
import AdminRouter from "../features/admin/adminroutes/AdminRouter";

const router = createBrowserRouter([...authRouter, ...AdminRouter]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router}></ReactRouterProvider>;
};

export default RouterProvider;
