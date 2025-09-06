import { Outlet } from "react-router-dom";
import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <>
      <LogoHeader />
      <div className="flex flex-col flex-1 bg-bg w-full min-h-screen py-[52px] overflow-y">
        <Outlet />
      </div>
      <Navigation />
    </>
  );
}
