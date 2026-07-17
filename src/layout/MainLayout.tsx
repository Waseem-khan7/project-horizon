import type { ReactNode } from "react";
import Sidebar from "../components/navigation/Sidebar";
import "./MainLayout.css";

type MainLayoutProps = {
    children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="layout">
            <Sidebar />

            <main className="content">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;