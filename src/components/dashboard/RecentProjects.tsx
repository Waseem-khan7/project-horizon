import { recentProjects } from "../../data/dashboard";

function RecentProjects() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-800">Recent Projects</h2>

        <p className="mt-1 text-sm text-slate-500">
          Overview of your latest workspace projects.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-sm text-slate-400">
              <th className="px-6 py-4 font-medium">Project</th>

              <th className="px-6 py-4 font-medium">Owner</th>

              <th className="px-6 py-4 font-medium">Status</th>

              <th className="px-6 py-4 font-medium">Updated</th>
            </tr>
          </thead>

          <tbody>
            {recentProjects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-slate-100 last:border-none"
              >
                <td className="px-6 py-4 font-medium text-slate-700">
                  {project.name}
                </td>

                <td className="px-6 py-4 text-slate-500">{project.owner}</td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : project.status === "Active"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-500">{project.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentProjects;
