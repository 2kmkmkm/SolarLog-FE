import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useGlobalLoading(timeoutMs = 10000) {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    if (isFetching || isMutating) {
      const timer = setTimeout(() => setDelay(true), timeoutMs);
      return () => clearTimeout(timer);
    } else {
      setDelay(false);
    }
  }, [isFetching, isMutating, timeoutMs]);

  return { isLoading: isFetching > 0 || isMutating > 0, delay };
}
