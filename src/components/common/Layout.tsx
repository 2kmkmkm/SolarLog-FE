import { Outlet } from "react-router-dom";
import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <>
      <LogoHeader />
      <Outlet />
      <Navigation />
    </>
  );
}
