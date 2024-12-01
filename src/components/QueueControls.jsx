import { useState } from "react";
import { removeFromQueue, resetQueue } from "../utils/api";

export default function QueueControls() {
  const [entryId, setEntryId] = useState("");

  const handleRemove = async () => {
    if (!entryId) {
      alert("削除するエントリのIDを入力してください。");
      return;
    }
    try {
      await removeFromQueue(entryId);
      alert(`エントリ ${entryId} が削除されました。`);
      setEntryId("");
    } catch (error) {
      console.error(error);
      alert("エントリの削除に失敗しました。");
    }
  };

  const handleReset = async () => {
    try {
      await resetQueue();
      alert("キューがリセットされました。");
    } catch (error) {
      console.error(error);
      alert("キューのリセットに失敗しました。");
    }
  };

  return (
    <div>
      <h2>キュー操作</h2>
      <div>
        <input
          type="text"
          placeholder="削除するエントリのID"
          value={entryId}
          onChange={(e) => setEntryId(e.target.value)}
        />
        <button onClick={handleRemove}>エントリを削除</button>
      </div>
      <div>
        <button onClick={handleReset}>キューをリセット</button>
      </div>
    </div>
  );
}
