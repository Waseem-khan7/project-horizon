import AppHeader from "../layout/AppHeader";
import PersonalInfo from "../components/profile/PersonalInfo";
import AccountInfo from "../components/profile/AccountInfo";
import SkillsSection from "../components/profile/SkillsSection";
import ActivityTimeline from "../components/profile/ActivityTimeline";
import { useAppSelector } from "../store/hooks";

function Profile() {
  const workspaceName = useAppSelector(
    (state) => state.workspace.workspaceName,
  );

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <AppHeader
        title="Profile"
        description={`Manage your profile and workspace information for ${workspaceName}.`}
      />

      <PersonalInfo />

      <AccountInfo />

      <SkillsSection />

      <ActivityTimeline />
    </div>
  );
}

export default Profile;
