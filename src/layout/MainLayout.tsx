import { useEffect, useState, type ReactNode } from "react";
import Sidebar from "../components/navigation/Sidebar";

import {
  toggleSidebar,
  openSidebar,
  closeSidebar,
} from "../store/slices/uiSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width:1024px)").matches,
  );

  const dispatch = useAppDispatch();

  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1024px)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);

      if (e.matches) {
        dispatch(openSidebar());
      } else {
        dispatch(closeSidebar());
      }
    };

    handleChange(mediaQuery as unknown as MediaQueryListEvent);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white">
      <div className="mx-auto flex max-w-[1440px] items-start">
        {/* Hamburger */}

        {!isDesktop && (
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="fixed top-4 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl shadow-md transition hover:bg-slate-100"
          >
            ☰
          </button>
        )}

        <Sidebar sidebarOpen={sidebarOpen} isDesktop={isDesktop} />

        <main className="flex min-h-screen flex-1 flex-col overflow-x-hidden">
          <div
            className={`flex-1 p-4 transition-all duration-300 md:p-6 lg:p-8 ${
              !isDesktop ? "pt-20" : "pt-8"
            }`}
          >
            {children}
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
