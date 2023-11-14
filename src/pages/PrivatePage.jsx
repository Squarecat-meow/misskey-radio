import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivatePage = () => {
  const userIsLogin = localStorage.getItem("token");

  return <div>{userIsLogin ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivatePage;
