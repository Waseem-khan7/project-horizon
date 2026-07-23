import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  path: string;
};

function NavItem({ title, path }: Props) {
  return (
    <NavLink
      to={path}
      end={path === "/"}
      className={({ isActive }) =>
        `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
        } `
      }
    >
      {title}
    </NavLink>
  );
}

export default NavItem;
