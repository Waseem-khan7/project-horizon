import AppHeader from "../layout/AppHeader";

import DashboardStats from "../components/dashboard/DashboardStats";
import RecentActivity from "../components/dashboard/RecentActivity";
import ProjectProgress from "../components/dashboard/ProjectProgress";
import RecentProjects from "../components/dashboard/RecentProjects";

import { useAppSelector } from "../store/hooks";

function Dashboard() {
  const workspaceName = useAppSelector(
    (state) => state.workspace.workspaceName,
  );

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <AppHeader
        title="Dashboard"
        description={`Monitor your workspace activity and performance for ${workspaceName}.`}
      />

      {/* Stats */}

      <DashboardStats />

      {/* Activity + Progress */}

      <div className="grid gap-8 lg:grid-cols-2">
        <RecentActivity />

        <ProjectProgress />
      </div>

      {/* Projects */}

      <RecentProjects />
    </div>
  );
}

export default Dashboard;
