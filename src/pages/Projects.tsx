import { useState } from "react";
import ProjectList from "../components/projects/ProjectList";
import SearchBar from "../components/projects/SearchBar";
import PageHeader from "../components/ui/PageHeader";

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
      <PageHeader
        title="Projects"
        description="Manage and monitor all your active projects."
        buttonText="+ New Project"
        onButtonClick={handleNewProject}
      />

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
