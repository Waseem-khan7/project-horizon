export function getQueryParam(
  searchParams: URLSearchParams,
  key: string,
  defaultValue = "",
) {
  return searchParams.get(key) ?? defaultValue;
}

export function updateQueryParam(
  searchParams: URLSearchParams,
  key: string,
  value: string,
) {
  const params = new URLSearchParams(searchParams);

  if (value.trim()) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  return params;
}
