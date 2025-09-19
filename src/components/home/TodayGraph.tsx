import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { parseHours } from "@utils/parseHoursUtils";
import type { graphType } from "../../types/generationType";
import { useEffect, useState } from "react";
import { getTodayGraph } from "@apis/generation";

// const data: graphType[] = [
//   {
//     measuredDate: "2025-09-16T05:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T06:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T07:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T08:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T09:00:00",
//     power: 1.0,
//   },
//   {
//     measuredDate: "2025-09-16T10:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T11:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T12:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T13:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T14:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T15:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T16:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T17:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T18:00:00",
//     power: 0.0,
//   },
//   {
//     measuredDate: "2025-09-16T19:00:00",
//     power: 1.0,
//   },
// ];

export default function TodayGraph() {
  const [list, setList] = useState<graphType[] | null>(null);

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

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        data={list ?? []}
        margin={{ top: 30, right: 35, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" tick={{ fontSize: 10, fill: "#989898" }} />
        <YAxis tick={{ fontSize: 10, fill: "#989898" }} />
        <Tooltip />
        <Line
          type="monotone" // 곡선(line curve) 지정 ("monotone", "linear" 등)
          dataKey="power" // data의 key
          stroke="#3FB6FF" // 선 색상
          strokeWidth={1} // 선 두께
          dot={false} // 점 표시 여부
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
