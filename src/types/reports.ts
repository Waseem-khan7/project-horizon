export type ReportStat = {
  id: number;
  title: string;
  value: number | string;
  subtitle: string;
};

export type ReportStatus = "Published" | "Draft" | "In Review";

export type Report = {
  id: number;
  title: string;
  category: string;
  status: ReportStatus;
  updatedAt: string;
};

export type ReportCategory = {
  id: number;
  title: string;
  description: string;
};
