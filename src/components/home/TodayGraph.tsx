import { parseHours } from "@utils/parseHoursUtils";
import type { graphType } from "../../types/generationType";
import { useEffect, useState } from "react";
import { getTodayGraph } from "@apis/generation";
import Graph from "@components/common/Graph";

export default function TodayGraph() {
  const [list, setList] = useState<graphType[]>([]);

  useEffect(() => {
    const fetchTodayGraph = async () => {
      try {
        const res = await getTodayGraph();
        if (res.success) {
          setList(parseHours(res.data));
        }
      } catch (err) {
        console.log("getTodayGraph Error: ", err);
      }
    };
    fetchTodayGraph();
  }, []);

  return <Graph list={list ?? []} dataKey="hour" label="시" />;
}
