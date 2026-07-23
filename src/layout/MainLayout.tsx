import { useState, type ReactNode } from "react";
import Sidebar from "../components/navigation/Sidebar";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="fixed top-4 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl shadow-md transition-all duration-300 hover:bg-slate-100"
        >
          <span className="text-2xl leading-none">☰</span>
        </button>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main
          className={`flex-1 overflow-x-hidden p-4 transition-all duration-300 ease-in-out md:p-6 lg:p-8 ${
            sidebarOpen ? "pt-8" : "pt-20"
          } `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
