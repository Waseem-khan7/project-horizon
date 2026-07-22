import type { WorkspaceCardProps } from "../../types/ui";

function WorkspaceCard({ children }: WorkspaceCardProps) {
  return (
    <div className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl">
      {children}
    </div>
  );
}

export default WorkspaceCard;
