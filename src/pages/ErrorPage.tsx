import Button from "@components/common/Button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const nav = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col gap-9 items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="text-5xl text-sub font-bold">404</div>
            <div className="text-2xl text-sub font-bold">NOT FOUND</div>
          </div>
          <div className="text-base text-darkgray font-medium">
            서버 에러입니다. 다시 시도해주세요.
          </div>
        </div>
        <Button label="홈으로" onClick={() => nav("/home")} />
      </div>
    </div>
  );
}
