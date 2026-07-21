export type Project = {
  id: number;
  name: string;
  technology: string;
  status: "Active" | "Completed" | "Planning" | "In Review";
  progress: number;
  members: number;
  dueDate: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Inventory Dashboard",
    technology: "React",
    status: "Active",
    progress: 72,
    members: 4,
    dueDate: "25 Jul 2026",
  },
  {
    id: 2,
    name: "CRM Portal",
    technology: "Next.js",
    status: "Completed",
    progress: 100,
    members: 6,
    dueDate: "12 Jul 2026",
  },
  {
    id: 3,
    name: "Employee Management",
    technology: "Angular",
    status: "Planning",
    progress: 28,
    members: 3,
    dueDate: "04 Aug 2026",
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    technology: "Vue",
    status: "In Review",
    progress: 90,
    members: 5,
    dueDate: "01 Aug 2026",
  },
  {
    id: 5,
    name: "Finance Tracker",
    technology: "React",
    status: "Active",
    progress: 64,
    members: 5,
    dueDate: "18 Aug 2026",
  },
  {
    id: 6,
    name: "HR Management",
    technology: "Next.js",
    status: "Planning",
    progress: 40,
    members: 2,
    dueDate: "30 Aug 2026",
  },
];
