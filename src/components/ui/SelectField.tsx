import type { SelectFieldProps } from "../../types/ui";

function SelectField({
  id,
  label,
  value,
  placeholder,
  options,
  description,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 transition-all duration-300 outline-none hover:border-blue-400 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {description && <p className="text-sm text-slate-500">{description}</p>}
    </div>
  );
}

export default SelectField;
