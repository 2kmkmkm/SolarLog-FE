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
import PublicRoute from "@routes/PublicRoute";
import PrivateRoute from "@routes/PrivateRoute";
import ErrorPage from "@pages/ErrorPage";

export default function AppRoutes() {
  return (
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
      </Route>
      <Route path="/500" element={<ErrorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
