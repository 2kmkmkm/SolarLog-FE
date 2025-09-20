import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import SignupPage from "@pages/SignupPage";
import AnalysisPage from "@pages/AnalysisPage";
import NotificationPage from "@pages/NotificationPage";
import MyPage from "@pages/MyPage";
import Layout from "@components/common/Layout";
import DetectionPage from "@pages/DetectionPage";
import NotFoundPage from "@pages/NotFoundPage";
import { useAppDispatch } from "@hooks/useRedux";
import { useEffect } from "react";
import { decodeToken } from "@utils/decodeToken";
import { setToken } from "@features/authSlice";
import PrivateRoute from "@routes/PrivateRoute";
import PublicRoute from "@routes/PublicRoute";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = decodeToken(token);
      dispatch(
        setToken({
          token,
          userId: payload.sub,
          installLocation: payload.installLocation,
        })
      );
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/my" element={<MyPage />} />
          </Route>
          <Route path="/detection/:alarmId" element={<DetectionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
