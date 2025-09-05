import type { ReactNode } from "react";

export default function GreenBox({ children }: { children: ReactNode }) {
  return <div className="bg-lightgreen p-4 rounded-xl">{children}</div>;
}
