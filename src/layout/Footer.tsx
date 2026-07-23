function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-sm text-slate-500 md:flex-row">
        <div>
          <p className="font-medium text-slate-700">Horizon Dashboard</p>

          <p className="mt-1 text-xs text-slate-400">
            Built with React • TypeScript • Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span>Version 1.0.0</span>

          <span>© {new Date().getFullYear()} Horizon</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
