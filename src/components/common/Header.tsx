import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function Header({ title }: { title: string }) {
  const nav = useNavigate();

  return (
    <div className="z-40 h-[52px] flex-shrink-0 shadow-input px-3 flex items-center justify-between">
      <button onClick={() => nav(-1)}>
        <Icon icon="ion:chevron-back" className="w-6 h-6 text-darkgray" />
      </button>
      <div className="heading1 flex justify-center">{title}</div>
      <div className="w-7 h-7" />
    </div>
  );
}
