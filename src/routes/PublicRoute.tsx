import { useAppSelector } from "@hooks/useRedux";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const token = useAppSelector((state) => state.auth.token);

  if (token) return <Navigate to="/home" replace />;

  return <Outlet />;
}
