import type { ReportStat } from "../../types/reports";

type Props = {
  stat: ReportStat;
};

function ReportStatCard({ stat }: Props) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <p className="text-sm font-medium text-slate-500">{stat.title}</p>

      <h3 className="mt-2 text-3xl font-bold text-slate-800">{stat.value}</h3>

      <p className="mt-3 text-sm text-slate-400">{stat.subtitle}</p>
    </article>
  );
}

export default ReportStatCard;
