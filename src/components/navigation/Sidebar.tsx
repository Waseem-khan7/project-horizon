import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavItem from "./NavItem";
import { navItems } from "./NavItems";

import { useAppDispatch } from "../../store/hooks";
import { closeSidebar } from "../../store/slices/uiSlice";

type SidebarProps = {
  sidebarOpen: boolean;
  isDesktop: boolean;
};

function Sidebar({ sidebarOpen, isDesktop }: SidebarProps) {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isDesktop) {
      dispatch(closeSidebar());
    }
  }, [location.pathname, isDesktop, dispatch]);

  return (
    <>
      {!isDesktop && sidebarOpen && (
        <div
          onClick={() => dispatch(closeSidebar())}
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm"
        />
      )}

      <aside
        className={` ${
          isDesktop ? "sticky top-0 self-stretch" : "fixed top-0 left-0"
        } z-40 flex min-h-screen flex-col overflow-hidden border-r border-slate-200 bg-white transition-all duration-300 ease-in-out ${
          isDesktop
            ? "w-65"
            : sidebarOpen
              ? "w-65 translate-x-0 shadow-xl"
              : "w-65 -translate-x-full"
        } `}
      >
        {/* Logo */}

        <div className="flex h-20 items-center justify-center border-b border-slate-200">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-slate-800 transition hover:text-blue-600"
          >
            Horizon
          </Link>
        </div>

        {/* Navigation */}

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
