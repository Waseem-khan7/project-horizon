import { reportCategories } from "../../data/reports";
import ReportCategoryCard from "./ReportCategoryCard";

function ReportCategories() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Report Categories
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Explore reports grouped by business area.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reportCategories.map((category) => (
          <ReportCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export default ReportCategories;
