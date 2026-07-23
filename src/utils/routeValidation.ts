const VALID_TECHNOLOGIES = ["React", "Next.js", "Angular", "Vue"] as const;

const VALID_STATUS = ["Active", "Completed", "Planning", "In Review"] as const;

function validateSearch(search: string) {
  return search.trim();
}

function validateTechnology(technology: string) {
  return VALID_TECHNOLOGIES.includes(
    technology as (typeof VALID_TECHNOLOGIES)[number],
  )
    ? technology
    : "";
}

function validateStatus(status: string) {
  return VALID_STATUS.includes(status as (typeof VALID_STATUS)[number])
    ? status
    : "";
}

export function parseProjectQuery(searchParams: URLSearchParams) {
  return {
    searchTerm: validateSearch(searchParams.get("search") ?? ""),
    technology: validateTechnology(searchParams.get("technology") ?? ""),
    status: validateStatus(searchParams.get("status") ?? ""),
  };
}
