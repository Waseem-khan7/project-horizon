import type { WorkspaceCardProps } from "../../types/ui";

function WorkspaceCard({ title, description, children }: WorkspaceCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl">
      <div className="border-b border-slate-200 p-8">
        <h2 className="text-3xl font-bold text-slate-800">{title}</h2>

        {description && <p className="mt-2 text-slate-500">{description}</p>}
      </div>

      <div className="space-y-8 p-8">{children}</div>
    </section>
  );
}

export default WorkspaceCard;
