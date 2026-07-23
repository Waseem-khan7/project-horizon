import { useEffect, useState, type ReactNode } from "react";
import Sidebar from "../components/navigation/Sidebar";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width:1024px)").matches,
  );

  const [sidebarOpen, setSidebarOpen] = useState(
    () => window.matchMedia("(min-width:1024px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1024px)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);

      if (e.matches) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white">
      <div className="mx-auto flex max-w-[1440px] items-start">
        {/* Hamburger */}

        {!isDesktop && (
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="fixed top-4 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl shadow-md transition hover:bg-slate-100"
          >
            ☰
          </button>
        )}

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          isDesktop={isDesktop}
        />

        <main
          className={`flex-1 overflow-x-hidden p-4 transition-all duration-300 md:p-6 lg:p-8 ${
            !isDesktop ? "pt-20" : "pt-8"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
