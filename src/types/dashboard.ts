export type StatCard = {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

export type Activity = {
  id: number;
  title: string;
  description: string;
  time: string;
};

export type Progress = {
  id: number;
  project: string;
  progress: number;
  status: "On Track" | "In Review" | "Completed";
};

export type Project = {
  id: number;
  name: string;
  owner: string;
  status: "Active" | "Completed" | "Pending";
  updated: string;
};
