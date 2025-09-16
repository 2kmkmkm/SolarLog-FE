import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useRef } from "react";
import { useOutsideClick } from "@hooks/useOutsideclick";

export default function Information({ contents }: { contents: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useOutsideClick([buttonRef, boxRef], () => setIsOpen(false));

  return (
    <div className="relative flex items-center">
      <button ref={buttonRef} onClick={() => setIsOpen((prev) => !prev)}>
        <Icon icon="fluent:info-24-regular" className="w-3.5 h-3.5 text-gray" />
      </button>
      {isOpen && (
        <div
          ref={boxRef}
          className="absolute border border-gray/10 shadow-box max-w-[210px] min-w-fit left-full ml-1 z-50 bg-lightlightgray px-2 py-1 rounded-lg"
        >
          <span className="body3 text-darkgray whitespace-nowrap">
            {contents}
          </span>
        </div>
      )}
    </div>
  );
}
