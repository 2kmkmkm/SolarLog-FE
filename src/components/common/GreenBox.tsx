import type { ReactNode } from "react";

export default function GreenBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col bg-lightgreen w-full gap-1.5 p-4 rounded-xl">
      {children}
    </div>
  );
}
