import type { Activity, Progress, Project, StatCard } from "../types/dashboard";

export const stats: StatCard[] = [
  {
    id: 1,
    title: "Projects",
    value: "12",
    change: "+2 this month",
    trend: "up",
  },
  {
    id: 2,
    title: "Completed",
    value: "9",
    change: "+1 this week",
    trend: "up",
  },
  {
    id: 3,
    title: "Pending",
    value: "3",
    change: "-1 yesterday",
    trend: "down",
  },
  {
    id: 4,
    title: "Revenue",
    value: "₹1.2M",
    change: "+18%",
    trend: "up",
  },
];

export const recentActivities: Activity[] = [
  {
    id: 1,
    title: "Dashboard Updated",
    description: "New widgets were added successfully.",
    time: "5 min ago",
  },
  {
    id: 2,
    title: "Profile Updated",
    description: "Workspace information changed.",
    time: "25 min ago",
  },
  {
    id: 3,
    title: "Report Generated",
    description: "Monthly analytics report exported.",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "New Project",
    description: "Project Horizon created.",
    time: "Today",
  },
];

export const projectProgress: Progress[] = [
  {
    id: 1,
    project: "Project Horizon",
    progress: 82,
    status: "On Track",
  },
  {
    id: 2,
    project: "CRM Dashboard",
    progress: 65,
    status: "In Review",
  },
  {
    id: 3,
    project: "Analytics Portal",
    progress: 100,
    status: "Completed",
  },
];

export const recentProjects: Project[] = [
  {
    id: 1,
    name: "Project Horizon",
    owner: "Waseem",
    status: "Active",
    updated: "Today",
  },
  {
    id: 2,
    name: "CRM Dashboard",
    owner: "Sarah",
    status: "Completed",
    updated: "Yesterday",
  },
  {
    id: 3,
    name: "Analytics Portal",
    owner: "John",
    status: "Pending",
    updated: "2 days ago",
  },
];
