export const fetcher = (url) =>
  fetch(url, { credentials: "include" }).then((r) => r.json());
