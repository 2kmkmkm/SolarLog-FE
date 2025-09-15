import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
export default function LoadingScreen() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  if (!isFetching && !isMutating) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[999]">
      <BeatLoader color="#FF770F" size={15} />
    </div>
  );
}
