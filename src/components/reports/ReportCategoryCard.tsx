import type { ReportCategory } from "../../types/reports";

type Props = {
  category: ReportCategory;
};

function ReportCategoryCard({ category }: Props) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {category.description}
      </p>
    </article>
  );
}

export default ReportCategoryCard;
