// AddressModal.tsx
import DaumPostCode from "react-daum-postcode";
import { useOutsideClick } from "@hooks/useOutsideclick";
import { useRef } from "react";

export function AddressModal({
  open,
  onClose,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (addr: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div ref={ref}>
        <DaumPostCode
          className="w-full h-full"
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
