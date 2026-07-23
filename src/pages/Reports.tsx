import AppHeader from "../layout/AppHeader";
import ReportsOverview from "../components/reports/ReportsOverview";
import RecentReportsTable from "../components/reports/RecentReportsTable";
import ReportCategories from "../components/reports/ReportCategories";
import { useAppSelector } from "../store/hooks";

function Reports() {
  const workspaceName = useAppSelector(
    (state) => state.workspace.workspaceName,
  );
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <AppHeader
        title="Reports"
        description={`View analytics and performance reports for ${workspaceName}.`}
      />

      <ReportsOverview />

      <RecentReportsTable />

      <ReportCategories />
    </div>
  );
}

export default Reports;
