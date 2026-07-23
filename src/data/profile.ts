import type { PersonalInfo, AccountInfo, Activity } from "../types/profile";

export const personalInfo: PersonalInfo = {
  name: "Waseem Khan",
  role: "Frontend Developer",
  employeeId: "EMP-1024",
  email: "waseem@example.com",
  phone: "+91 98765 43210",
  location: "Noida, India",
  department: "Engineering",
  joined: "July 2026",
};

export const accountInfo: AccountInfo = {
  username: "waseemkhan",
  workEmail: "waseem@company.com",
  technology: "React",
  timezone: "Asia/Kolkata",
};

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "REST API",
];

export const activities: Activity[] = [
  {
    id: 1,
    title: "Updated profile information",
    date: "Today",
  },
  {
    id: 2,
    title: "Completed Project Horizon task",
    date: "Yesterday",
  },
  {
    id: 3,
    title: "Submitted daily tracker",
    date: "2 days ago",
  },
];
