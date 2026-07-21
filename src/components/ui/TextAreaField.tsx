import type { TextAreaFieldProps } from "../../types/ui";

function TextAreaField({
  id,
  label,
  value,
  placeholder = "",
  rows = 4,
  error,
  onChange,
}: TextAreaFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <textarea
        id={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-slate-700 transition-all duration-300 outline-none placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
            : "border-slate-300 hover:border-blue-400 focus:border-blue-500 focus:ring-blue-100"
        } `}
      />

      {error && (
        <p className="animate-pulse text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextAreaField;
