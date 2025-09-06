import DaumPostCode from "react-daum-postcode";
import { useOutsideClick } from "@hooks/useOutsideclick";
import { useRef, useEffect } from "react";

type AddressModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (addr: string) => void;
};

export function AddressModal({ isOpen, onClose, onSelect }: AddressModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div ref={ref}>
        <DaumPostCode
          autoClose
          animation
          onComplete={(data) => {
            onSelect(data.address);
            onClose();
          }}
        />
      </div>
    </div>
  );
}
