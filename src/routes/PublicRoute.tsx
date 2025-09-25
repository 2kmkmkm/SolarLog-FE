import { useAppSelector } from "@hooks/useRedux";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const token = useAppSelector((state) => state.auth.token);

  return token ? <Navigate to="/home" replace /> : <Outlet />;
}
