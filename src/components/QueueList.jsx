import { useEffect, useState } from "react";
import { getQueueStatus } from "../utils/api";

export default function QueueList() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const data = await getQueueStatus();
        setQueue(data);
      } catch (error) {
        console.error(error);
        alert("キューの取得に失敗しました。");
      }
    };
    fetchQueue();
  }, []);

  return (
    <div>
      <h2>現在のキュー</h2>
      <ul>
        {queue.map((entry) => (
          <li key={entry.id}>
            {entry.name}（{entry.email}） - {entry.people_count}人
          </li>
        ))}
      </ul>
    </div>
  );
}
