import ProfileCard from "./ProfileCard";
import { accountInfo } from "../../data/profile";

function AccountInfo() {
  const items = [
    ["Username", accountInfo.username],
    ["Work Email", accountInfo.workEmail],
    ["Primary Technology", accountInfo.technology],
    ["Time Zone", accountInfo.timezone],
  ];

  return (
    <ProfileCard
      title="Account Information"
      description="Current account settings."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map(([label, value]) => (
          <div key={label}>
            <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
              {label}
            </p>

            <p className="mt-1 text-slate-700">{value}</p>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
}

export default AccountInfo;
