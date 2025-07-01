import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router";
import authRouter from "../features/auth/authRouter";
import AdminRouter from "../features/admin/adminroutes/AdminRouter";
import TeacherRouter from "../features/teacher/teacher-router/TeacherRouter";

const router = createBrowserRouter([
  ...authRouter,
  ...AdminRouter,
  ...TeacherRouter,
]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router}></ReactRouterProvider>;
};

export default RouterProvider;
