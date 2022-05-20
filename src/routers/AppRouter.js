import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
