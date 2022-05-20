import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const PrivateRoute = ({ children }) => {
  // si hizo login, permite las rutas privadas
  const logged = useSelector((state) => state.login.logged);
  return logged ? children :  <Navigate to="/" />;
};
