import UserImage from "../../assets/user-img.png"
type ActivityItem = {
  id: number;
  user: string;
  action: string;
  date: string;
  time: string;
  avatar: string;
  score?: string; // optional (only for exams)
};

const activityData: ActivityItem[] = [
  {
    id: 1,
    user: "User A",
    action: "completed module 3",
    date: "08/03/2017",
    time: "01:45 PM",
    avatar: UserImage,
  },
  {
    id: 2,
    user: "User A",
    action: "finished mock exam name",
    date: "08/03/2017",
    time: "01:45 PM",
    avatar: UserImage,
    score: "80% Correct",
  },
  {
    id: 3,
    user: "User A",
    action: "completed module 3",
    date: "08/03/2017",
    time: "01:45 PM",
    avatar: UserImage,
  },
  {
    id: 4,
    user: "User A",
    action: "finished mock exam name",
    date: "08/03/2017",
    time: "01:45 PM",
    avatar: UserImage,
    score: "80% Correct",
  },
  {
    id: 5,
    user: "User A",
    action: "completed module 3",
    date: "08/03/2017",
    time: "01:45 PM",
    avatar: UserImage,
  },
  {
    id: 6,
    user: "User B",
    action: "completed module 1",
    date: "08/03/2017",
    time: "01:45 PM",
    avatar: UserImage,
  },
];

const RecentUserActivity = () => {
  return (
    <div className="p-4 bg-light-blue rounded-[10px] flex flex-col gap-4">
      <h2 className="text-black text-lg font-bold">
        Recent User Activity
      </h2>

      <div className="flex flex-col gap-2">
        {activityData.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="pl-2 pr-4 py-2 bg-white rounded-lg flex justify-between items-center"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={item.avatar}
                alt={item.user}
                className="w-[41px] h-[41px] rounded-full"
              />

              <div className="flex flex-col gap-1">
                <div className="text-black text-sm font-semibold">
                  {item.user} {item.action}
                </div>
                <div className="text-paragraph text-xs font-medium flex">
                  {item.date} & {item.time}
                </div>
              </div>
            </div>

            {/* Right side (optional score) */}
            {item.score && (
              <div className="text-paragraph text-xs font-medium">
                {item.score}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUserActivity;
