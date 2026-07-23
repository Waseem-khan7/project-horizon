import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";

import NavItem from "./NavItem";
import { navItems } from "./NavItems";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const location = useLocation();

  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width:1024px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1024px)");

    const handleScreenChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const desktop = e.matches;

      setIsDesktop(desktop);

      if (desktop) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleScreenChange(mediaQuery);

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => mediaQuery.removeEventListener("change", handleScreenChange);
  }, [setSidebarOpen]);

  useEffect(() => {
    if (!isDesktop && sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isDesktop, sidebarOpen, setSidebarOpen]);

  return (
    <>
      {!isDesktop && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 flex h-screen flex-col overflow-hidden border-r border-slate-200 bg-white transition-all duration-300 ease-in-out ${
          isDesktop
            ? sidebarOpen
              ? "w-65"
              : "w-0"
            : sidebarOpen
              ? "w-65 translate-x-0 shadow-xl"
              : "w-65 -translate-x-full"
        } lg:relative`}
      >
        <div className="flex h-20 items-center justify-center border-b border-slate-200">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-slate-800 transition hover:text-blue-600"
          >
            Horizon
          </Link>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {navItems.map((item) => (
            <NavItem key={item.id} title={item.title} path={item.path} />
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
