import React from "react";
import { Navigate } from "react-router-dom";
import { Login } from "../components/login/Login";
import { useAppSelector } from "../hooks/useAppSelector";

export const LoginPage = () => {
  const { authorized } = useAppSelector((state) => state.user);

  return authorized ? <Navigate to="/" /> : <Login />;
};
