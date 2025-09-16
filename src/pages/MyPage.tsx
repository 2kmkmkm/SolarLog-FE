import Badge from "@components/common/Badge";
import InstallationInfoBox from "@components/mypage/InstallationInfoBox";
import PanelInfoBox from "@components/mypage/PanelInfoBox";
import { clearToken } from "@features/authSlice";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.userId);

  const handleLogoutClick = () => {
    dispatch(clearToken());
    alert("성공적으로 로그아웃 되었습니다.");
    nav("/login");
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <span className="heading1 ml-1 text-sub">{userId}</span>
          <span className="body1 text-darkgray pb-0.5">님, 안녕하세요!</span>
        </div>
        <Badge onClick={handleLogoutClick}>
          <span className="body3_bold text-gray">로그아웃</span>
        </Badge>
      </div>
      <PanelInfoBox />
      <InstallationInfoBox />
    </div>
  );
}
