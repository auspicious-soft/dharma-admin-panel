import { CandlestickChart, CheckCircle, GraduationCapSolid } from "iconoir-react";
type StatItem = {
  id: number;
  value: number | string;
  label: string;
  icon: React.ReactNode;
};

const statsData: StatItem[] = [
  { id: 1, value: 402, label: "Total Users", icon: <GraduationCapSolid width={14} height={14} /> },
  { id: 2, value: 36, label: "New Users (Last 7 Days)", icon: <GraduationCapSolid width={14} height={14} /> },
  { id: 3, value: 36, label: "New Subscriptions (Last 7 Days)", icon: <GraduationCapSolid width={14} height={14} /> },
  { id: 4, value: 58, label: "Active Today", icon: <CheckCircle width={14} height={14} /> },
  { id: 5, value: 120, label: "Total Modules", icon: <CandlestickChart width={14} height={14} /> },
  { id: 6, value: 350, label: "Total Exams", icon: <CandlestickChart width={14} height={14} /> },
];

const StatsCard = () => {
  return (
    <div className="flex flex-col gap-3.5">
      {/* Header */}
      <h2 className="text-black text-lg font-bold">
        Hello, Dharam
      </h2>

      {/* Stats */}
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 lg:flex lg:justify-between py-5">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-1 "
          >
            <div className="flex items-center gap-2 md:gap-5">
              {/* Icon */}
              <div className="w-6 h-6 relative bg-primary_blue rounded-[5px] text-white flex items-center justify-center">
                 {item.icon}
              </div>

              {/* Value */}
              <div className="text-[#10375c] text-2xl md:text-3xl font-bold">
                {item.value}
              </div>
            </div>

            {/* Label */}
            <div className="text-Primary-Font text-xs font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
