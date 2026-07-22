export interface ProjectFiltersProps {
  technology: string;
  status: string;

  onTechnologyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;

  onStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
