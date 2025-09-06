import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationList = [
  { icon: "basil:sun-outline", label: "홈", path: "/home" },
  { icon: "iconoir:graph-up", label: "통계", path: "/analysis" },
  { icon: "mynaui:bell", label: "알림", path: "/notification" },
  { icon: "iconoir:profile-circle", label: "My", path: "/my" },
];

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 w-full h-[52px] flex-shrink-0 px-10 bg-white shadow-navigation flex justify-between items-center">
      {NavigationList.map((item) => {
        const isSelected = pathname.startsWith(item.path);
        return (
          <Link
            key={item.label}
            to={item.path}
            className={`hover:opacity-70 w-9 flex flex-col justify-center items-center gap-0.5 ${
              isSelected ? "text-main" : "text-gray"
            }`}
          >
            <Icon icon={item.icon} className="w-5 h-5" />
            <div className="body3">{item.label}</div>
          </Link>
        );
      })}
    </div>
  );
}
