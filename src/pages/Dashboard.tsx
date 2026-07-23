import AppHeader from "../layout/AppHeader";
import { useAppSelector } from "../store/hooks";

function Dashboard() {
  const workspaceName = useAppSelector(
    (state) => state.workspace.workspaceName,
  );

  return (
    <div className="space-y-8">
      <AppHeader
        title="Dashboard"
        description={`Welcome to ${workspaceName}. Monitor your workspace activities and recent updates.`}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="text-slate-500">Projects</h3>
          <p className="mt-3 text-4xl font-bold">24</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="text-slate-500">Tasks</h3>
          <p className="mt-3 text-4xl font-bold">128</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="text-slate-500">Reports</h3>
          <p className="mt-3 text-4xl font-bold">18</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="text-slate-500">Users</h3>
          <p className="mt-3 text-4xl font-bold">540</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
