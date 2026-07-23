import ProfileCard from "./ProfileCard";
import { personalInfo } from "../../data/profile";

function PersonalInfo() {
  const details = [
    ["Employee ID", personalInfo.employeeId],
    ["Email", personalInfo.email],
    ["Phone", personalInfo.phone],
    ["Department", personalInfo.department],
    ["Location", personalInfo.location],
    ["Joined", personalInfo.joined],
  ];

  return (
    <ProfileCard
      title="Personal Information"
      description="Basic employee information."
    >
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-600">
          {personalInfo.name.charAt(0)}
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-800">
            {personalInfo.name}
          </h3>

          <p className="mt-1 text-slate-500">{personalInfo.role}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {details.map(([label, value]) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                  {label}
                </p>

                <p className="mt-1 text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProfileCard>
  );
}

export default PersonalInfo;
