import NavItem from "./NavItem";
import { navItems } from "./NavItems";

function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen flex-col border-r border-slate-200 bg-white shadow-sm md:flex md:w-[90px] lg:w-[260px]">
      <div className="flex h-20 items-center justify-center border-b">
        <h2 className="text-2xl font-bold text-blue-600">Horizon</h2>
      </div>

      <nav className="flex-1 space-y-3 px-4 py-6">
        {navItems.map((item) => (
          <NavItem key={item.id} title={item.title} path={item.path} />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
