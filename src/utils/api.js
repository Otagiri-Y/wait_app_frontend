const API_BASE = "http://localhost:5000/api";

export async function addToQueue(data) {
  const response = await fetch(`${API_BASE}/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("キューへの追加に失敗しました");
}

export async function getQueueStatus() {
  const response = await fetch(`${API_BASE}/queue`);
  if (!response.ok) throw new Error("キューの取得に失敗しました");
  return response.json();
}

export async function getWaitTime() {
  const response = await fetch(`${API_BASE}/wait-time`);
  if (!response.ok) throw new Error("待ち時間の取得に失敗しました");
  return response.json();
}
