import { useEffect } from "react";

export function useOutsideClick(
  refs: React.RefObject<HTMLElement | null>[],
  handler: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedInside = refs.some(
        (ref) => ref.current && ref.current.contains(event.target as Node)
      );
      if (!clickedInside) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler]);
}
