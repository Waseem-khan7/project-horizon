import type { Report, ReportCategory, ReportStat } from "../types/reports";

export const reportStats: ReportStat[] = [
  {
    id: 1,
    title: "Total Reports",
    value: 48,
    subtitle: "Across all projects",
  },
  {
    id: 2,
    title: "Published",
    value: 31,
    subtitle: "Ready to share",
  },
  {
    id: 3,
    title: "Drafts",
    value: 9,
    subtitle: "Pending completion",
  },
  {
    id: 4,
    title: "Archived",
    value: 8,
    subtitle: "Historical reports",
  },
];

export const reports: Report[] = [
  {
    id: 1,
    title: "Inventory Dashboard",
    category: "Project",
    status: "Published",
    updatedAt: "Today",
  },
  {
    id: 2,
    title: "Finance Overview",
    category: "Finance",
    status: "Draft",
    updatedAt: "Yesterday",
  },
  {
    id: 3,
    title: "Employee Analytics",
    category: "Team",
    status: "Published",
    updatedAt: "2 days ago",
  },
  {
    id: 4,
    title: "CRM Insights",
    category: "Performance",
    status: "In Review",
    updatedAt: "Last week",
  },
];

export const reportCategories: ReportCategory[] = [
  {
    id: 1,
    title: "Project Reports",
    description: "Track project delivery and milestones.",
  },
  {
    id: 2,
    title: "Performance",
    description: "Measure productivity and KPIs.",
  },
  {
    id: 3,
    title: "Finance",
    description: "Revenue, budgets and forecasts.",
  },
  {
    id: 4,
    title: "Teams",
    description: "Employee engagement and growth.",
  },
];
