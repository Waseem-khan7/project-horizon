import { NavLink } from "react-router-dom"

type NavItemProps = {
    title: string;
    path: string;
};

function NavItem({ title, path }: NavItemProps) {
    return (

        <NavLink
            to={path}

            className={({ isActive }) =>
                (isActive ? "nav-link active" : "nav-link")
            }
        >
            {title}
        </NavLink>

    )
}

export default NavItem
