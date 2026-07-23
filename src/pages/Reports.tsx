import AppHeader from "../layout/AppHeader";
import ReportsOverview from "../components/reports/ReportsOverview";
import RecentReportsTable from "../components/reports/RecentReportsTable";
import ReportCategories from "../components/reports/ReportCategories";

function Reports() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <AppHeader
        title="Reports"
        description="Monitor project insights, business metrics, and recent reporting activity."
      />

      <ReportsOverview />

      <RecentReportsTable />

      <ReportCategories />
    </div>
  );
}

export default Reports;
