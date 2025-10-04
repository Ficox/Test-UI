const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function getCounter(): Promise<number> {
  const res = await fetch(`${API_URL}/counter`);
  const data = await res.json();
  return data.counter ?? 0;
}

export async function increment(): Promise<number> {
  const res = await fetch(`${API_URL}/increment`, { method: "POST" });
  const data = await res.json();
  return data.counter ?? 0;
}
