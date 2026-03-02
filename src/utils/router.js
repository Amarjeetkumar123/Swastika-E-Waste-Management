export function normalizePath(pathname) {
  if (!pathname) {
    return "/";
  }

  const trimmed = pathname.trim();
  if (trimmed === "/") {
    return "/";
  }

  return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
}
