export function formatDate(string: string): string {
  const date = new Date(string);
  return date.toLocaleDateString("de-DE");
}

export function formatDateTime(string: string): string {
  const date = new Date(string);
  return (
    date.toLocaleDateString("de-DE") +
    " " +
    date.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }) +
    " Uhr"
  );
}
