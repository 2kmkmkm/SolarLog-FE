import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white rounded-t-[30px] px-5 py-6">{children}</div>;
}
