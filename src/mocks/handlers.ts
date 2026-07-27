import { delay, http, HttpResponse } from "msw";

import dashboard from "./data/dashboard.json";
import profile from "./data/profile.json";
import projects from "./data/projects.json";
import reports from "./data/reports.json";
import settings from "./data/settings.json";
import workspace from "./data/workspace.json";

export const handlers = [
  http.get("https://api.project-horizon.dev/dashboard", async () => {
    await delay(1200);
    return HttpResponse.json(dashboard);
  }),

  http.get("https://api.project-horizon.dev/profile", async () => {
    await delay(900);
    return HttpResponse.json(profile);
  }),

  http.get("https://api.project-horizon.dev/projects", async () => {
    await delay(1500);
    return HttpResponse.json(projects);
  }),

  http.get("https://api.project-horizon.dev/reports", async () => {
    await delay(1800);
    return HttpResponse.json(reports);
  }),

  http.get("https://api.project-horizon.dev/settings", async () => {
    await delay(700);
    return HttpResponse.json(settings);
  }),

  http.get("https://api.project-horizon.dev/workspace", async () => {
    await delay(1000);
    return HttpResponse.json(workspace);
  }),
];
