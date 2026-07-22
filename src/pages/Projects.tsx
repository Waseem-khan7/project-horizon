import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectList from "../components/projects/ProjectList";
import SearchBar from "../components/projects/SearchBar";
import useProjectFilters from "../hooks/useProjectFilters";

function Projects() {
  const [message, setMessage] = useState("");

  const {
    searchTerm,
    technology,
    status,
    setSearchTerm,
    setTechnology,
    setStatus,
  } = useProjectFilters();

  const handleNewProject = () => {
    setMessage("🚀 New Project feature coming soon!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        title="Projects"
        description="Manage and monitor all your active projects."
        buttonText="+ New Project"
        onButtonClick={handleNewProject}
      />

      {message && (
        <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
          {message}
        </div>
      )}

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <ProjectFilters
        technology={technology}
        status={status}
        onTechnologyChange={(e) => setTechnology(e.target.value)}
        onStatusChange={(e) => setStatus(e.target.value)}
      />

      <ProjectList
        searchTerm={searchTerm}
        technology={technology}
        status={status}
      />
    </div>
  );
}

export default Projects;
