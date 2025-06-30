import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
import authRouter from "../features/auth/authRouter";

const router = createBrowserRouter([...authRouter]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router}></ReactRouterProvider>;
};

export default RouterProvider;
