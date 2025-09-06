import type { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-3xl py-5 px-5 bg-white space-y-3">
      {children}
    </div>
  );
}
