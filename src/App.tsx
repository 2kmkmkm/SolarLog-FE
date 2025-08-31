import { Routes, Route } from "react-router-dom";

import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import SignupPage from "@pages/SignupPage";
import AnalysisPage from "@pages/AnalysisPage";
import NotificationPage from "@pages/NotificationPage";
import MyPage from "@pages/MyPage";
import Layout from "@components/common/Layout";
import Toggle from "@components/common/Toggle";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/my" element={<MyPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Toggle />
    </>
  );
}

export default App;
