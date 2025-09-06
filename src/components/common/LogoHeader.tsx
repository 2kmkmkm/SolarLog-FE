import { useNavigate } from "react-router-dom";

export default function LogoHeader() {
  const nav = useNavigate();

  return (
    <div className="h-[52px] flex-shrink-0 fixed top-0 w-full shadow-header px-6 flex items-center z-40 bg-white">
      <button
        className="w-fit h-fit hover:opacity-60"
        onClick={() => nav("/home")}
      >
        <img src="/Logo_img.svg" className="w-8 h-8" />
      </button>
    </div>
  );
}
