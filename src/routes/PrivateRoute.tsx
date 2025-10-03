import LoadingScreen from "@components/common/LoadingScreen";
import { useAppSelector } from "@hooks/useRedux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { token, initialized } = useAppSelector((state) => state.auth);

  // 토큰 복구 여부 확인 전 → 로딩 화면
  if (!initialized) {
    return <LoadingScreen />;
  }

  // 복구 끝났으면 토큰 여부에 따라 분기
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
