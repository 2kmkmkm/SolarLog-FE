import { QueryCache, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import isaxios
import { useNavigate } from "react-router-dom";

export default function RQProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const nav = useNavigate();
  const [isAxiosError, setIsAxiosError] = useState(false);

  const [client] = useState(() => {
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
        onError: (error: unknown) => {
            console.error("Global Query Error: ", error);
            if(isAxiosError(error) && error.response)
        }
      })
    });
  });
  return <div>RQProvider</div>;
}
