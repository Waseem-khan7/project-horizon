import { reports } from "../../data/reports";

function RecentReportsTable() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-800">Recent Reports</h2>

        <p className="mt-1 text-sm text-slate-500">
          Recently updated reports across all projects.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Report
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Updated
              </th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-t border-slate-100 transition-colors hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-medium text-slate-800">
                  {report.title}
                </td>

                <td className="px-6 py-4 text-slate-600">{report.category}</td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {report.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-500">{report.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentReportsTable;
