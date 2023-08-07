export async function fetchApi<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(`http://localhost:9000/${input}`, init);
  const result = await data.json();

  return result as T;
}
