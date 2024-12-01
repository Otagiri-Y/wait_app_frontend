import { useEffect, useState } from "react";
import { getWaitTime } from "../utils/api";

export default function QueueStatus() {
  const [waitTime, setWaitTime] = useState(0);

  useEffect(() => {
    const fetchWaitTime = async () => {
      try {
        const data = await getWaitTime();
        setWaitTime(data.total_waiting_time);
      } catch (error) {
        console.error(error);
        alert("待ち時間の取得に失敗しました。");
      }
    };
    fetchWaitTime();
  }, []);

  return (
    <div>
      <h2>合計待ち時間</h2>
      <p>{waitTime} 分</p>
    </div>
  );
}
