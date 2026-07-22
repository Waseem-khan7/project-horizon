import Button from "./Button";
import type { PageHeaderProps } from "../../types/ui";

function PageHeader({
  title,
  description,
  buttonText,
  onButtonClick,
  children,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">
          {title}
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500 md:text-base">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {children}

        {buttonText && onButtonClick && (
          <Button onClick={onButtonClick}>{buttonText}</Button>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
