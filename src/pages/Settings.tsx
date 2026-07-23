import AppHeader from "../layout/AppHeader";
import SettingsPanel from "../components/settings/SettingsPanel";

import { useAppSelector } from "../store/hooks";

function Settings() {
  const workspaceName = useAppSelector(
    (state) => state.workspace.workspaceName,
  );

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <AppHeader
        title="Workspace Settings"
        description={`Configure your workspace, project preferences, and notifications for ${workspaceName}.`}
      />

      <SettingsPanel />
    </div>
  );
}

export default Settings;
