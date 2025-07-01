import type { RouteObject } from "react-router";
import AdminLayout from "../../admin/adminLayout/AdminLayout";
import AllTasks from "../teacher-pages/AllTasks";
import TeacherLayout from "../teacher-layout/TeacherLayout";

const route: RouteObject[] = [
  {
    path: "teacher",
    element: <TeacherLayout></TeacherLayout>,
    children: [
      {
        path: "all-tasks",
        element: <AllTasks></AllTasks>,
      },
    ],
  },
];
export default route;
