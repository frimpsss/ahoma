import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppLazyWrapper from "../components/AppLazyWrapper";
import FloatingActionButton from "../components/shared/fab";
const NavBar = React.lazy(() => import("../components/shared/navbar"));
const AppLayout = () => {
  return (
    <Suspense fallback={<AppLazyWrapper />}>
      <div className="relative w-screen   bg-layout">
        <NavBar />
        <Outlet />
        <FloatingActionButton />
      </div>
    </Suspense>
  );
};

export default AppLayout;
