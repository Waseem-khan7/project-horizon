import ReportStatCard from "./ReportStatCard";
import { reportStats } from "../../data/reports";

function ReportsOverview() {
  return (
    <section
      aria-label="Report overview"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {reportStats.map((stat) => (
        <ReportStatCard key={stat.id} stat={stat} />
      ))}
    </section>
  );
}

export default ReportsOverview;
