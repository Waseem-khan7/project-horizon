import "./Sidebar.css"
import NavItem from "./NavItem";
import { navItems } from "./NavItems"

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <h2>Project-Horizon</h2>
            </div>
            <nav>
                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        title={item.title}
                        path={item.path}
                    />
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
