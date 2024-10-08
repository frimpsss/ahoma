import { createBrowserRouter } from "react-router-dom";
import React from "react";
import AppLayout from "../layouts/AppLayout";
const HomeTimeline = React.lazy(() => import("../pages/app/HomeTimeline"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomeTimeline />,
      },
    ],
  },
]);
