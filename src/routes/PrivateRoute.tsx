import { useAppSelector } from "@hooks/useRedux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
}
