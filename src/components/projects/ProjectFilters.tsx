import SelectField from "../ui/SelectField";
import type { ProjectFiltersProps } from "../../types/project";

function ProjectFilters({
  technology,
  status,
  onTechnologyChange,
  onStatusChange,
}: ProjectFiltersProps) {
  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2">
      <SelectField
        id="technology-filter"
        label="Technology"
        value={technology}
        placeholder="All Technologies"
        options={["React", "Next.js", "Angular", "Vue"]}
        onChange={onTechnologyChange}
      />

      <SelectField
        id="status-filter"
        label="Status"
        value={status}
        placeholder="All Status"
        options={["Active", "Completed", "Pending"]}
        onChange={onStatusChange}
      />
    </div>
  );
}

export default ProjectFilters;
