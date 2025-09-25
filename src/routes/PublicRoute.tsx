import { useAppSelector } from "@hooks/useRedux";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const token = useAppSelector((state) => state.auth.token);

  if (token === undefined) return null; // 토큰 상태가 아직 결정되지 않음
  if (token) return <Navigate to="/home" replace />;

  return <Outlet />;
}
