import type { RouteObject } from "react-router";

import AllTasks from "../teacher-pages/AllTasks";
import TeacherLayout from "../teacher-layout/TeacherLayout";
import TaskDetails from "../teacher-pages/TaskDetails";

const route: RouteObject[] = [
  {
    path: "teacher",
    element: <TeacherLayout></TeacherLayout>,
    children: [
      {
        path: "all-tasks",
        element: <AllTasks></AllTasks>,
      },
      {
        path: "task-details",
        element: <TaskDetails></TaskDetails>,
      },
    ],
  },
];
export default route;
