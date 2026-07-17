import Sidebar from "../components/navigation/Sidebar";
import "./MainLayout.css";

type Props = {
    children: React.ReactNode;
};

function MainLayout({ children }: Props) {
    return (
        <div className="layout">
            <Sidebar />

            <main className="content">{children}</main>
        </div>
    );
}

export default MainLayout;