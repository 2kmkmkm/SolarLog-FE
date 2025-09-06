import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, type ReactNode } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-green w-full flex items-center justify-between px-3 py-2 rounded-lg "
      >
        <span className="heading2 text-white">{title}</span>
        <Icon
          icon="ion:chevron-back"
          className={`text-darkgray w-5 h-5 rotate transform transition-transform duration-300 ${
            isOpen ? "-rotate-90" : "rotate-90"
          }`}
        />
      </button>
      <div
        className={`bg-lightgreen flex flex-col gap-3 rounded-lg transition-all duration-300 ${
          isOpen ? "opacity-100 p-4 " : "max-h-0 opacity-0 p-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
