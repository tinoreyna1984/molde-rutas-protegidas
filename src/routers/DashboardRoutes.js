import React from "react";
import { Route, Routes } from "react-router-dom";
import { Protected01 } from "../pages/Protected01";
import { Protected02 } from "../pages/Protected02";
import { Profile } from "../pages/Profile";

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/prot01" element={<Protected01 />} />
        <Route path="/prot02" element={<Protected02 />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};
