export async function fetchGetTask() {
  const response = await fetch("/api/task");
  const data = await response.json();
  return data;
}

export async function fetchPostTask() {
  const response = await fetch("/api/task");
  const data = await response.json();
  return data;
}
