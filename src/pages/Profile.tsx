import PageHeader from "../components/ui/PageHeader";
import PersonalInfo from "../components/profile/PersonalInfo";
import AccountInfo from "../components/profile/AccountInfo";
import SkillsSection from "../components/profile/SkillsSection";
import ActivityTimeline from "../components/profile/ActivityTimeline";

function Profile() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <PageHeader
        title="Profile"
        description="Manage your personal information and account settings."
      />

      <PersonalInfo />

      <AccountInfo />

      <SkillsSection />

      <ActivityTimeline />
    </div>
  );
}

export default Profile;
