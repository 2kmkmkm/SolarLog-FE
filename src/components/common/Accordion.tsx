import { Icon } from "@iconify/react/dist/iconify.js";
import type { ReactNode } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  return (
    <>
      <button className="bg-green w-full flex items-center justify-between px-3 py-2 rounded-lg ">
        <span className="heading2 text-white">{title}</span>
        <Icon
          icon="ion:chevron-back"
          className="text-darkgray w-5 h-5 rotate-90"
        />
      </button>
      <div className="bg-lightgreen flex flex-col p-4 gap-3 rounded-lg">
        {children}
      </div>
    </>
  );
}
