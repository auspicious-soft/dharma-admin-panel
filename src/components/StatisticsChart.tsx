import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ---- Types ----
type ChartPoint = {
  label: string;
  value: number;
};

type StatisticsChartProps = {
  data7Days: ChartPoint[];
  data30Days: ChartPoint[];
  title?: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
};

// ---- Component ----
export default function StatisticsChart({
  data7Days,
  data30Days,
  title = "Statistics",
  yAxisLabel = "New Purchase",
  xAxisLabel = "Days",
}: StatisticsChartProps) {
  const [range, setRange] = useState<"7" | "30">("7");

  const chartData = range === "7" ? data7Days : data30Days;

  return (
    <div className="w-full rounded-[10px] bg-[#1c2329] p-4 relative">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <Select
          value={range}
          onValueChange={(value) => setRange(value as "7" | "30")}
        >
          <SelectTrigger className="bg-transparent border border-white text-white text-xs rounded-full px-3 py-2 outline-none w-[92px]">
            <SelectValue placeholder="Select Range" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="7">7 Days</SelectItem>
            <SelectItem value="30">30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="sideways-rl flex justify-start items-center gap-2 absolute left-3 top-1/2 transform -translate-y-1/2">
        <div className="justify-start text-[#8b8e98] text-[9px] font-normal">
          {yAxisLabel}
        </div>
        <svg
          width="6"
          height="22"
          viewBox="0 0 6 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.22739 21.35C2.22739 21.5433 2.38409 21.7 2.57739 21.7C2.77069 21.7 2.92739 21.5433 2.92739 21.35L2.57739 21.35L2.22739 21.35ZM2.82488 0.102488C2.6882 -0.034195 2.46659 -0.0341949 2.3299 0.102488L0.102518 2.32987C-0.0341655 2.46656 -0.0341655 2.68817 0.102518 2.82485C0.239202 2.96153 0.460809 2.96153 0.597493 2.82485L2.57739 0.84495L4.55729 2.82485C4.69397 2.96153 4.91558 2.96153 5.05227 2.82485C5.18895 2.68817 5.18895 2.46656 5.05227 2.32987L2.82488 0.102488ZM2.57739 21.35L2.92739 21.35L2.92739 0.349976L2.57739 0.349976L2.22739 0.349976L2.22739 21.35L2.57739 21.35Z"
            fill="#8B8E98"
          />
        </svg>
      </div>

      <div className="flex justify-start items-center gap-2 absolute bottom-3 left-1/2 transform -translate-x-1/2">
        <div className="justify-start text-[#8b8e98] text-[9px] font-normal">
          {xAxisLabel}
        </div>
        <svg
          className="relative top-[1px]"
          width="22"
          height="6"
          viewBox="0 0 22 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.350098 2.22739C0.156798 2.22739 9.76622e-05 2.38409 9.76622e-05 2.57739C9.76622e-05 2.77069 0.156798 2.92739 0.350098 2.92739V2.57739V2.22739ZM21.5976 2.82488C21.7343 2.6882 21.7343 2.46659 21.5976 2.32991L19.3702 0.102519C19.2335 -0.0341647 19.0119 -0.0341647 18.8752 0.102519C18.7385 0.239202 18.7385 0.46081 18.8752 0.597494L20.8551 2.57739L18.8752 4.55729C18.7385 4.69397 18.7385 4.91558 18.8752 5.05227C19.0119 5.18895 19.2335 5.18895 19.3702 5.05227L21.5976 2.82488ZM0.350098 2.57739V2.92739H21.3501V2.57739V2.22739H0.350098V2.57739Z"
            fill="#8B8E98"
          />
        </svg>
      </div>

      {/* Chart */}
      <div className="h-[290px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 0, right: 0, left: -15, bottom: 0 }}
          >
            <XAxis
              dataKey="label"
              tick={{ fill: "#8b8e98", fontSize: 8.98 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "#8b8e98", fontSize: 8.98 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
