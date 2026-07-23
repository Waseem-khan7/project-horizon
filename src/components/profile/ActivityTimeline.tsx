import ProfileCard from "./ProfileCard";
import { activities } from "../../data/profile";

function ActivityTimeline() {
  return (
    <ProfileCard
      title="Recent Activity"
      description="Latest actions performed by the user."
    >
      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-none last:pb-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </div>

              <p className="font-medium text-slate-700">{activity.title}</p>
            </div>

            <span className="text-sm text-slate-400">{activity.date}</span>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
}

export default ActivityTimeline;
