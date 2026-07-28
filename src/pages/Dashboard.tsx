import AppHeader from "../layout/AppHeader";

import DashboardStats from "../components/dashboard/DashboardStats";
import RecentActivity from "../components/dashboard/RecentActivity";
import ProjectProgress from "../components/dashboard/ProjectProgress";
import RecentProjects from "../components/dashboard/RecentProjects";

import { useAppSelector } from "../store/hooks";

import { getDashboard } from "../services/dashboardService";
import { useEffect } from "react";

function Dashboard() {
  const workspaceName = useAppSelector(
    (state) => state.workspace.workspaceName,
  );

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboard();

        console.log("Dashboard API:", data);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <AppHeader
        title="Dashboard"
        description={`Monitor your workspace activity and performance for ${workspaceName}.`}
      />

      <DashboardStats />

      <div className="grid gap-8 lg:grid-cols-2">
        <RecentActivity />

        <ProjectProgress />
      </div>

      <RecentProjects />
    </div>
  );
}

export default Dashboard;
