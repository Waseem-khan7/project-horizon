import { projects } from "../../data/project";
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
  searchTerm: string;
};

function ProjectList({ searchTerm }: ProjectListProps) {
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (filteredProjects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
        <h3 className="text-lg font-semibold text-slate-700">
          No Projects Found
        </h3>

        <p className="mt-2 text-slate-500">
          Try searching with another project name.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
