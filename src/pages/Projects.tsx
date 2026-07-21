import { useState } from "react";
import ProjectList from "../components/projects/ProjectList";
import SearchBar from "../components/projects/SearchBar";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  const handleNewProject = () => {
    setMessage("🚀 New Project feature coming soon!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">Projects</h1>

          <p className="mt-2 text-slate-500">
            Manage and monitor all your active projects.
          </p>
        </div>

        <button
          onClick={handleNewProject}
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
        >
          + New Project
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
          {message}
        </div>
      )}

      {/* Search */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Project List */}
      <ProjectList searchTerm={searchTerm} />
    </div>
  );
}

export default Projects;
