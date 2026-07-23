import { stats } from "../../data/dashboard";

function DashboardStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article
          key={stat.id}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.title}</p>

              <h2 className="mt-3 text-3xl font-bold text-slate-800">
                {stat.value}
              </h2>
            </div>

            <div
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                stat.trend === "up"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {stat.trend === "up" ? "▲" : "▼"}
            </div>
          </div>

          <p
            className={`mt-5 text-sm ${
              stat.trend === "up" ? "text-green-600" : "text-red-600"
            }`}
          >
            {stat.change}
          </p>
        </article>
      ))}
    </section>
  );
}

export default DashboardStats;
