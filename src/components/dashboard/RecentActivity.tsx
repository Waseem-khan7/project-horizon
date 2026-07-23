import { recentActivities } from "../../data/dashboard";

function RecentActivity() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Recent Activity</h2>

        <p className="mt-1 text-sm text-slate-500">
          Track recent updates and actions across your workspace.
        </p>
      </div>

      <div className="space-y-6">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="relative flex gap-4">
            {/* Timeline dot */}

            <div className="mt-1 flex h-3 w-3 shrink-0 rounded-full bg-blue-600" />

            <div className="flex-1">
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <h3 className="font-semibold text-slate-800">
                  {activity.title}
                </h3>

                <span className="text-xs text-slate-400">{activity.time}</span>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentActivity;
