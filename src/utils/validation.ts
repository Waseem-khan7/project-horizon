export const invalidNames = [
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

export const containsUnsafeContent = (value: string) => {
  const unsafePattern =
    /<script.*?>.*?<\/script>|<[^>]+>|javascript:|onerror|onload|onclick/gi;

  return unsafePattern.test(value);
};

export const validateProjectName = (value: string) => {
  const trimmedValue = value.trim();

  if (containsUnsafeContent(trimmedValue)) {
    return "Project name is invalid.";
  }

  const isInvalid =
    !/[a-zA-Z]/.test(trimmedValue) ||
    /^[0-9]+$/.test(trimmedValue) ||
    /[^a-zA-Z0-9\s-_]/.test(trimmedValue) ||
    invalidNames.includes(trimmedValue.toLowerCase()) ||
    /^(.)\1+$/.test(trimmedValue);

  if (trimmedValue.length === 0) {
    return "Project name is required.";
  }

  if (trimmedValue.length < 3) {
    return "Project name must be at least 3 characters.";
  }

  if (isInvalid) {
    return "Project name is invalid.";
  }

  return "";
};

export const validateDescription = (value: string) => {
  const trimmedValue = value.trim();

  if (containsUnsafeContent(trimmedValue)) {
    return "Description contains invalid content.";
  }

  if (trimmedValue.length === 0) {
    return "Description is required.";
  }

  if (trimmedValue.length < 10) {
    return "Minimum 10 characters required.";
  }

  return "";
};
