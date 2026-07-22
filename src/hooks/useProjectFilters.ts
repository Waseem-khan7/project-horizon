import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { getQueryParam, updateQueryParam } from "../utils/queryParams";

function useProjectFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = getQueryParam(searchParams, "search");
  const technology = getQueryParam(searchParams, "technology");
  const status = getQueryParam(searchParams, "status");

  const updateSearchParam = useCallback(
    (key: string, value: string, replace = false) => {
      const params = updateQueryParam(searchParams, key, value);

      setSearchParams(params, { replace });
    },
    [searchParams, setSearchParams],
  );

  const setSearchTerm = useCallback(
    (value: string, replace = false) => {
      updateSearchParam("search", value, replace);
    },
    [updateSearchParam],
  );

  const setTechnology = useCallback(
    (value: string) => {
      updateSearchParam("technology", value);
    },
    [updateSearchParam],
  );

  const setStatus = useCallback(
    (value: string) => {
      updateSearchParam("status", value);
    },
    [updateSearchParam],
  );

  return {
    searchTerm,
    technology,
    status,
    setSearchTerm,
    setTechnology,
    setStatus,
  };
}

export default useProjectFilters;
