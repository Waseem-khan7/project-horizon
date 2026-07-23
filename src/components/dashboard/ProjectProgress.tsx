import { projectProgress } from "../../data/dashboard";

function ProjectProgress() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Project Progress</h2>

        <p className="mt-1 text-sm text-slate-500">
          Monitor the progress of active projects.
        </p>
      </div>

      <div className="space-y-6">
        {projectProgress.map((project) => (
          <div key={project.id}>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700">
                {project.project}
              </h3>

              <span className="text-sm font-medium text-slate-500">
                {project.progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500"
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-slate-400">{project.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectProgress;
