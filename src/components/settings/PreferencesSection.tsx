import { memo } from "react";
import ToggleSwitch from "../ui/ToggleSwitch";

type Props = {
  notifications: boolean;
  onToggleNotifications: () => void;
};

const PreferencesSection = memo(function PreferencesSection({
  notifications,
  onToggleNotifications,
}: Props) {
  return (
    <ToggleSwitch
      id="notifications"
      title="Notifications"
      description="Receive project updates"
      checked={notifications}
      onChange={onToggleNotifications}
    />
  );
});

export default PreferencesSection;
