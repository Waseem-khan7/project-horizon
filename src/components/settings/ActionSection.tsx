import { memo } from "react";

import Button from "../ui/Button";

type Props = {
  isFormValid: boolean;
  saveMessage: string;
  onSave: () => void;
  onClear: () => void;
};

const ActionSection = memo(function ActionSection({
  isFormValid,
  saveMessage,
  onSave,
  onClear,
}: Props) {
  return (
    <>
      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
        <Button type="button" variant="secondary" onClick={onClear}>
          Clear Form
        </Button>

        <Button type="button" disabled={!isFormValid} onClick={onSave}>
          Save Project
        </Button>
      </div>

      {saveMessage && (
        <p className="mt-4 text-center text-sm font-medium text-green-600">
          {saveMessage}
        </p>
      )}
    </>
  );
});

export default ActionSection;
