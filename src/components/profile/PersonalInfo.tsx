import ProfileCard from "./ProfileCard";
import { personalInfo } from "../../data/profile";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateWorkspaceName } from "../../store/slices/workspaceSlice";

function PersonalInfo() {
  const dispatch = useAppDispatch();

  const workspaceName = useAppSelector(
    (state) => state.workspace.workspaceName,
  );

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
        {/* Avatar */}

        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-600">
          {personalInfo.name.charAt(0)}
        </div>

        {/* Information */}

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-800">
            {personalInfo.name}
          </h3>

          <p className="mt-1 text-slate-500">{personalInfo.role}</p>

          {/* Personal Details */}

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

          {/* Workspace Settings */}

          <div className="mt-8 border-t border-slate-200 pt-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-slate-800">
                Workspace Settings
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Update the shared workspace name. Changes are reflected across
                all pages instantly using the centralized Redux store.
              </p>
            </div>

            <label
              htmlFor="workspace-name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Workspace Name
            </label>

            <input
              id="workspace-name"
              type="text"
              value={workspaceName}
              onChange={(e) => dispatch(updateWorkspaceName(e.target.value))}
              placeholder="Enter workspace name"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 shadow-sm transition-all duration-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>
    </ProfileCard>
  );
}

export default PersonalInfo;
