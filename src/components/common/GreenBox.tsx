import type { ReactNode } from "react";

export default function GreenBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col bg-lightgreen w-full gap-2.5 p-4 rounded-xl">
      {children}
    </div>
  );
}
