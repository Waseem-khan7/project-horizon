function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>

        <p className="mt-2 text-slate-500">Welcome to Project Horizon</p>
      </div>

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
