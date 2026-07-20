import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  path: string;
};

function NavItem({ title, path }: Props) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${
          isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "text-slate-700 hover:bg-blue-100"
        } `
      }
    >
      {title}
    </NavLink>
  );
}

export default NavItem;
