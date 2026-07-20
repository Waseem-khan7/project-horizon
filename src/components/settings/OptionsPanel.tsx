import { useState } from "react";

function OptionsPanel() {
  const [projectName, setProjectName] = useState("");

  const [technology, setTechnology] = useState("");

  const [theme, setTheme] = useState("");

  const [description, setDescription] = useState("");

  const [notifications, setNotifications] = useState(true);

  const [projectNameError, setProjectNameError] = useState("");

  const [descriptionError, setDescriptionError] = useState("");

  const isFormValid =
    projectName.trim().length >= 3 &&
    description.trim().length >= 10 &&
    !projectNameError &&
    !descriptionError;

  const containsUnsafeContent = (value: string) => {
    const unsafePattern =
      /<script.*?>.*?<\/script>|<[^>]+>|javascript:|onerror|onload|onclick/gi;

    return unsafePattern.test(value);
  };

  const technologyDescriptions: Record<string, string> = {
    React: "Building React applications.",
    "Next.js": "Building server-rendered applications.",
    Angular: "Enterprise Angular projects.",
    Vue: "Progressive Vue applications.",
  };

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTechnology = e.target.value.trim();

    if (!selectedTechnology) return;

    setTechnology(selectedTechnology);

    console.log("technology:", selectedTechnology);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value.trim();

    if (!selectedTheme) return;

    setTheme(selectedTheme);

    console.log("Theme:", selectedTheme);
  };

  const validateProjectName = (value: string) => {
    const trimmedValue = value.trim();

    if (containsUnsafeContent(trimmedValue)) {
      setProjectNameError("Project name is invalid.");
      setProjectName(value);
      return;
    }

    const invalidNames = [
      "test",
      "testing",
      "abc",
      "abcd",
      "xyz",
      "qwerty",
      "asdf",
      "aaaa",
      "aaaaa",
      "project",
      "demo",
      "sample",
      "temp",
      "new project",
    ];

    const isInvalid =
      !/[a-zA-Z]/.test(trimmedValue) ||
      /^[0-9]+$/.test(trimmedValue) ||
      /[^a-zA-Z0-9\s-_]/.test(trimmedValue) ||
      invalidNames.includes(trimmedValue.toLowerCase()) ||
      /^(.)\1+$/.test(trimmedValue);

    if (trimmedValue.length === 0) {
      setProjectNameError("Project name is required.");
    } else if (trimmedValue.length < 3) {
      setProjectNameError("Project name must be at least 3 characters.");
    } else if (isInvalid) {
      setProjectNameError("Project name is invalid.");
    } else {
      setProjectNameError("");
    }

    setProjectName(value);
  };

  const validateDescription = (value: string) => {
    const trimmedValue = value.trim();

    if (containsUnsafeContent(trimmedValue)) {
      setDescriptionError("Description contains invalid content.");
      setDescription(value);
      return;
    }

    if (trimmedValue.length === 0) {
      setDescriptionError("Description is required.");
    } else if (trimmedValue.length < 10) {
      setDescriptionError("Minimum 10 characters required.");
    } else {
      setDescriptionError("");
    }

    setDescription(value);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl">
      <div className="mb-10 border-b border-slate-200 pb-6">
        <h2 className="text-3xl font-bold text-slate-800">Project Settings</h2>

        <p className="mt-2 text-slate-500">
          Configure your project preferences and workspace options.
        </p>
      </div>

      <div className="space-y-8">
        {/* Project Name */}

        <div>
          <label className="mb-2 block font-medium">Project Name</label>

          <input
            type="text"
            value={projectName}
            onChange={(e) => validateProjectName(e.target.value)}
            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 shadow-sm transition-all duration-300 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-md focus:ring-4 focus:ring-blue-100 ${projectNameError ? "border-red-500" : "border-slate-300"} `}
            placeholder="Enter the project name"
          />
          {projectNameError && (
            <p className="mt-2 animate-pulse text-sm font-medium text-red-500">
              {projectNameError}
            </p>
          )}
        </div>

        {/* technology */}

        <div>
          <p className="mb-2 block font-medium">Frontend Technology</p>

          <select
            value={technology}
            onChange={handleTechnologyChange}
            className="w-full min-w-0 cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-all duration-300 ease-in-out outline-none hover:border-blue-400 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:text-base"
          >
            <option value="" disabled>
              Select Frontend Technology
            </option>

            <option value="React">React</option>

            <option value="Next.js">Next.js</option>

            <option value="Angular">Angular</option>

            <option value="Vue">Vue</option>
          </select>
          {technology && (
            <p className="mt-3 text-sm text-slate-500">
              {technologyDescriptions[technology]}
            </p>
          )}
        </div>

        {/* Theme */}

        <div>
          <label className="mb-2 block font-medium">Theme</label>

          <select
            value={theme}
            onChange={handleThemeChange}
            className="w-full min-w-0 cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-all duration-300 ease-in-out outline-none hover:border-blue-400 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:text-base"
          >
            <option value="" disabled>
              Select Theme
            </option>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block font-medium">Description</label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => validateDescription(e.target.value)}
            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 transition-all duration-300 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 ${
              descriptionError
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            } `}
            placeholder="Enter the description about the project"
          />
          {descriptionError && (
            <p className="mt-2 animate-pulse text-sm font-medium text-red-500">
              {descriptionError}
            </p>
          )}
        </div>

        {/* Notifications */}

        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <div>
            <h4 className="font-semibold">Notifications</h4>

            <p className="text-sm text-slate-500">Receive project updates</p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="h-5 w-5 cursor-pointer accent-blue-600 transition-all duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end border-t border-slate-200 pt-6">
          <button
            disabled={!isFormValid}
            className={`rounded-xl px-8 py-3 text-base font-semibold transition-all duration-300 ease-in-out ${
              isFormValid
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-300/40 active:scale-95"
                : "cursor-not-allowed bg-slate-300 text-slate-500"
            } `}
          >
            Save Changes
          </button>
        </div>

        <p
          className={`mt-4 text-sm font-medium ${
            isFormValid ? "text-green-600" : "text-red-500"
          }`}
        >
          {isFormValid
            ? "✔ Form is ready to submit."
            : "⚠ Please complete all required fields."}
        </p>
      </div>
    </div>
  );
}

export default OptionsPanel;
