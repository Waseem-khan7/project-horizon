type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="mb-8">
      <label
        htmlFor="search"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        Search Projects
      </label>

      <input
        id="search"
        type="text"
        value={searchTerm}
        placeholder="Search by project name..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 shadow-sm transition-all duration-300 outline-none placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

export default SearchBar;
