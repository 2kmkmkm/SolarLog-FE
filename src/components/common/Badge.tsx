import type { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="body2 px-2 py-1 w-fit bg-[#EDEDED] rounded-[10px] flex justify-center items-center gap-1">
      {children}
    </div>
  );
}
