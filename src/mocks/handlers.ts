import { delay, http, HttpResponse } from "msw";

import dashboard from "./data/dashboard.json";
import profile from "./data/profile.json";
import projects from "./data/projects.json";
import reports from "./data/reports.json";
import settings from "./data/settings.json";
import workspace from "./data/workspace.json";

import { mockConfig } from "./simulation";

export const handlers = [
  http.get("https://api.project-horizon.dev/dashboard", async () => {
    await delay(mockConfig.delay);

    switch (mockConfig.scenario) {
      case "success":
        return HttpResponse.json(dashboard);

      case "unauthorized":
        return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });

      case "forbidden":
        return HttpResponse.json({ message: "Forbidden" }, { status: 403 });

      case "not-found":
        return HttpResponse.json(
          { message: "Dashboard not found" },
          { status: 404 },
        );

      case "server-error":
        return HttpResponse.json(
          { message: "Internal Server Error" },
          { status: 500 },
        );

      case "network-error":
        return HttpResponse.error();

      case "timeout":
        await delay(15000);
        return HttpResponse.json(dashboard);

      default:
        return HttpResponse.json(dashboard);
    }
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
