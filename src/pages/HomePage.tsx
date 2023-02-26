import { Dashboard } from "../components/dashboard/Dashboard";
import { useAppSelector } from "../hooks/useAppSelector";
import { Navigate } from "react-router";

export const HomePage = () => {
  const { authorized } = useAppSelector((state) => state.user);

  return authorized ? <Dashboard /> : <Navigate to="/login" />;
};
