import { useState } from "react";
import { addToQueue } from "../utils/api";

export default function QueueForm() {
  const [formData, setFormData] = useState({ name: "", email: "", peopleCount: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addToQueue(formData);
      alert("キューに追加されました！");
      setFormData({ name: "", email: "", peopleCount: 1 });
    } catch (error) {
      console.error(error);
      alert("キューへの追加に失敗しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="名前"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="メールアドレス"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="number"
        placeholder="人数"
        value={formData.peopleCount}
        onChange={(e) => setFormData({ ...formData, peopleCount: parseInt(e.target.value) })}
      />
      <button type="submit">キューに追加</button>
    </form>
  );
}
