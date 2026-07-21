import type { ToggleSwitchProps } from "../../types/ui";

function ToggleSwitch({
  id,
  title,
  description,
  checked,
  onChange,
}: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-blue-300 hover:bg-white">
      <div>
        <label
          htmlFor={id}
          className="block cursor-pointer text-base font-semibold text-slate-800"
        >
          {title}
        </label>

        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>

      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 cursor-pointer accent-blue-600 transition-all duration-300 hover:scale-110"
      />
    </div>
  );
}

export default ToggleSwitch;
