import type { ChangeEvent } from "react";
import { memo } from "react";

import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import TextAreaField from "../ui/TextAreaField";

type Props = {
  projectName: string;
  projectNameError: string;
  technology: string;
  theme: string;
  description: string;
  descriptionError: string;

  technologyDescriptions: Record<string, string>;

  onProjectNameChange: (value: string) => void;

  onTechnologyChange: (e: ChangeEvent<HTMLSelectElement>) => void;

  onThemeChange: (e: ChangeEvent<HTMLSelectElement>) => void;

  onDescriptionChange: (value: string) => void;
};

const ProjectInfoSection = memo(function ProjectInfoSection({
  projectName,
  projectNameError,
  technology,
  theme,
  description,
  descriptionError,
  technologyDescriptions,
  onProjectNameChange,
  onTechnologyChange,
  onThemeChange,
  onDescriptionChange,
}: Props) {
  return (
    <>
      <InputField
        id="projectName"
        label="Project Name"
        value={projectName}
        placeholder="Enter project name"
        error={projectNameError}
        onChange={(e) => onProjectNameChange(e.target.value)}
      />

      <SelectField
        id="technology"
        label="Frontend Technology"
        value={technology}
        placeholder="Select Frontend Technology"
        options={["React", "Next.js", "Angular", "Vue"]}
        description={technologyDescriptions[technology]}
        onChange={onTechnologyChange}
      />

      <SelectField
        id="theme"
        label="Theme"
        value={theme}
        placeholder="Select Theme"
        options={["Light", "Dark"]}
        onChange={onThemeChange}
      />

      <TextAreaField
        id="description"
        label="Description"
        value={description}
        placeholder="Enter project description"
        rows={4}
        error={descriptionError}
        onChange={(e) => onDescriptionChange(e.target.value)}
      />
    </>
  );
});

export default ProjectInfoSection;
