import type { ButtonProps } from "../../types/ui";

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-xl px-6 py-3 font-semibold shadow-md transition-all duration-300 active:scale-95 disabled:cursor-not-allowed ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:scale-[1.02] hover:bg-blue-700 disabled:bg-slate-300 disabled:text-slate-500"
          : "border border-slate-300 bg-white text-slate-700 hover:border-red-400 hover:bg-red-50 hover:text-red-600"
      } ${className} `}
    >
      {children}
    </button>
  );
}

export default Button;
