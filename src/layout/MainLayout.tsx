import type { ReactNode } from "react";
import Sidebar from "../components/navigation/Sidebar";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 md:grid-cols-[90px_1fr] lg:grid-cols-[260px_1fr]">
        <Sidebar />

        <main className="min-w-0 overflow-x-hidden p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
