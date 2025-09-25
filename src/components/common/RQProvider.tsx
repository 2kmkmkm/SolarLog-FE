import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export default function RQProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const nav = useNavigate();
  const [errorStatus, setErrorStatus] = useState<number | null>(null);

  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1, // 실패 1번까지만 재시도
            refetchOnWindowFocus: false, // 창 포커싱 시 refetch 안함
            refetchOnReconnect: true, // 네트워크 다시 연결되면 재요청
            staleTime: 1000 * 60 * 5, // 5분간 fresh 상태 유지
          },
          mutations: {
            retry: 0,
          },
        },
        queryCache: new QueryCache({
          onError: (error) => {
            console.error("Global Query Error: ", error);
            if (isAxiosError(error) && error.response) {
              // 401은 인터셉터에서 처리 → 여기선 무시
              if (error.response.status === 401) return;
              setErrorStatus(error.response.status);
            }
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            console.log("Global Mutation Error: ", error);
            if (isAxiosError(error) && error.response) {
              setErrorStatus(error.response.status);
            }
          },
        }),
      })
  );

  useEffect(() => {
    if (errorStatus) {
      switch (errorStatus) {
        case 404:
          nav("/notfound");
          break;
        case 500:
          nav("/500");
          console.log(errorStatus);
          break;
        default:
          nav("/notfound");
      }
    }

    setErrorStatus(null);
  }, [errorStatus, nav]);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
