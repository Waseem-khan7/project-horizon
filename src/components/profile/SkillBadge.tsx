type Props = {
  skill: string;
};

function SkillBadge({ skill }: Props) {
  return (
    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100">
      {skill}
    </span>
  );
}

export default SkillBadge;
