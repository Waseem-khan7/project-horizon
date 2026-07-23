import ProfileCard from "./ProfileCard";
import SkillBadge from "./SkillBadge";
import { skills } from "../../data/profile";

function SkillsSection() {
  return (
    <ProfileCard title="Skills" description="Primary technologies and tools.">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </ProfileCard>
  );
}

export default SkillsSection;
