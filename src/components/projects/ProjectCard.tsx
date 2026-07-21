import type { Project } from "../../data/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    Active: "bg-green-100 text-green-700",
    Completed: "bg-blue-100 text-blue-700",
    Planning: "bg-yellow-100 text-yellow-700",
    "In Review": "bg-purple-100 text-purple-700",
  };

  const technologyColors = {
    React: "bg-sky-100 text-sky-700",
    "Next.js": "bg-slate-200 text-slate-800",
    Angular: "bg-red-100 text-red-700",
    Vue: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Project Name */}

      <h3 className="text-xl font-semibold text-slate-800">{project.name}</h3>

      {/* Badges */}

      <div className="mt-4 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            technologyColors[
              project.technology as keyof typeof technologyColors
            ]
          }`}
        >
          {project.technology}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusColors[project.status as keyof typeof statusColors]
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Progress */}

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm text-slate-500">
          <span>Progress</span>

          <span>{project.progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${project.progress}%`,
            }}
          />
        </div>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
        <div className="space-y-1 text-sm text-slate-500">
          <p>👥 {project.members} Members</p>

          <p>📅 {project.dueDate}</p>
        </div>

        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
