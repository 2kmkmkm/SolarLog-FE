import type { graphType } from "../../types/generationType";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Graph({ list }: { list: graphType[] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={list}
        margin={{ top: 30, right: 35, left: 0, bottom: 10 }}
      >
        <XAxis
          dataKey="hour"
          tick={{ fontSize: 10, fill: "#989898" }}
          axisLine={{ stroke: "#C5C5C5" }}
          tickLine={false}
          label={{
            value: "(시)",
            position: "insideBottomRight", // or "insideBottom"
            offset: -2, // 위치 조정
            fill: "#C5C5C5",
            fontSize: 10,
          }}
        />
        <YAxis
          tickLine={false}
          tick={{ fontSize: 10, fill: "#989898" }}
          axisLine={{ stroke: "#C5C5C5" }}
        />
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
