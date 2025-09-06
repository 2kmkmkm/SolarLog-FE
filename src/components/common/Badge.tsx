import type { ReactNode } from "react";

export default function Badge({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`body2 ${
        onClick
          ? "bg-white h-fit py-1 cursor-pointer hover:opacity-70"
          : "bg-bg py-1"
      } px-2 rounded-[10px] flex justify-center items-center gap-1`}
    >
      {children}
    </div>
  );
}
