import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="pb-[70px] flex flex-col bg-white w-full rounded-t-[30px] px-5 py-6">
      {children}
    </div>
  );
}
