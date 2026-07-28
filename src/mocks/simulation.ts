export type MockScenario =
  | "success"
  | "server-error"
  | "unauthorized"
  | "forbidden"
  | "not-found"
  | "network-error"
  | "timeout";

export const mockConfig = {
  scenario: "success" as MockScenario,

  delay: 1500,
};