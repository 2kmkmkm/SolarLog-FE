import { Outlet, useNavigate } from "react-router-dom";
import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";
import { useGlobalLoading } from "@hooks/useGlobalLoading";
import { useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function Layout() {
  const { isLoading, delay } = useGlobalLoading();
  const nav = useNavigate();

  useEffect(() => {
    if (delay) nav("/*");
  }, [delay, nav]);

  return (
    <>
      <LogoHeader />
      <div className="relative flex flex-col flex-1 bg-bg w-full min-h-screen py-[52px] overflow-y">
        <Outlet />
        {isLoading && <LoadingScreen />}
      </div>
      <Navigation />
    </>
  );
}
