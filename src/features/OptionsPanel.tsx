import { useCallback, useState } from "react";
import { validateDescription, validateProjectName } from "../utils/validation";
import { technologyDescriptions } from "../utils/constants";

import ActionSection from "../components/options/ActionSection";
import PreferencesSection from "../components/options/PreferencesSection";
import ProjectInfoSection from "../components/options/ProjectInfoSection";
import WorkspaceCard from "../components/ui/WorkspaceCard";
import PageHeader from "../components/ui/PageHeader";

function OptionsPanel() {
  const [projectName, setProjectName] = useState("");
  const [technology, setTechnology] = useState("");
  const [theme, setTheme] = useState("");
  const [description, setDescription] = useState("");
  const [notifications, setNotifications] = useState(true);

  const [projectNameError, setProjectNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [saveMessage, setSaveMessage] = useState("");

  const isFormValid =
    projectName.trim().length >= 3 &&
    technology !== "" &&
    theme !== "" &&
    description.trim().length >= 10 &&
    !projectNameError &&
    !descriptionError;

  const handleProjectNameChange = useCallback((value: string) => {
    setProjectName(value);
    setProjectNameError(validateProjectName(value));
  }, []);

  const handleTechnologyChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedTechnology = e.target.value.trim();
      if (!selectedTechnology) return;
      setTechnology(selectedTechnology);
    },
    [],
  );

  const handleThemeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedTheme = e.target.value.trim();
      if (!selectedTheme) return;
      setTheme(selectedTheme);
    },
    [],
  );

  const handleDescriptionChange = useCallback((value: string) => {
    setDescription(value);
    setDescriptionError(validateDescription(value));
  }, []);

  const handleToggleNotifications = useCallback(() => {
    setNotifications((prev) => !prev);
  }, []);

  const resetForm = () => {
    setProjectName("");
    setTechnology("");
    setTheme("");
    setDescription("");
    setNotifications(true);

    setProjectNameError("");
    setDescriptionError("");
  };

  const handleSaveProject = useCallback(() => {
    const projectData = {
      projectName,
      technology,
      theme,
      description,
      notifications,
    };

    console.log("Saved Project:", projectData);

    setSaveMessage(`✔ Project "${projectName}" saved successfully.`);

    resetForm();

    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  }, [projectName, technology, theme, description, notifications]);

  const handleClearForm = useCallback(() => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the form?",
    );

    if (!confirmed) return;
    resetForm();

    setSaveMessage("");
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Project Settings"
        description="Configure your project preferences and workspace options."
      />

      <WorkspaceCard>
        <ProjectInfoSection
          projectName={projectName}
          projectNameError={projectNameError}
          technology={technology}
          theme={theme}
          description={description}
          descriptionError={descriptionError}
          technologyDescriptions={technologyDescriptions}
          onProjectNameChange={handleProjectNameChange}
          onTechnologyChange={handleTechnologyChange}
          onThemeChange={handleThemeChange}
          onDescriptionChange={handleDescriptionChange}
        />

        <PreferencesSection
          notifications={notifications}
          onToggleNotifications={handleToggleNotifications}
        />

        <ActionSection
          isFormValid={isFormValid}
          saveMessage={saveMessage}
          onSave={handleSaveProject}
          onClear={handleClearForm}
        />
      </WorkspaceCard>
    </div>
  );
}

export default OptionsPanel;
