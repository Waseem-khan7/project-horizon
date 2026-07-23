import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="flex flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-slate-500 md:flex-row">
        <p>© {year} Horizon. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <Link to="/" className="transition hover:text-blue-600">
            Dashboard
          </Link>

          <Link to="/projects" className="transition hover:text-blue-600">
            Projects
          </Link>

          <Link to="/profile" className="transition hover:text-blue-600">
            Profile
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
