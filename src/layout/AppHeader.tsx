import Button from "../components/ui/Button";

type AppHeaderProps = {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
};

function AppHeader({
  title,
  description,
  buttonText,
  onButtonClick,
  children,
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 mb-8 border-b border-slate-200 bg-white/95 px-6 py-5 backdrop-blur-md md:px-6">
      <div className="flex flex-col gap-5 pl-14 md:flex-row md:items-center md:justify-between md:pl-0">
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            {title}
          </h1>

          {description && (
            <p className="mt-2 text-sm text-slate-500 md:text-base">
              {description}
            </p>
          )}
        </div>

        {(children || buttonText) && (
          <div className="flex items-center justify-center gap-3 md:justify-end">
            {children}

            {buttonText && onButtonClick && (
              <Button onClick={onButtonClick}>{buttonText}</Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default AppHeader;
