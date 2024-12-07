import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // useRouterをインポート
import styles from '../styles/Paid-Queue.module.css';

export default function PaidQueuePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [peopleCount, setPeopleCount] = useState(1);
  const [waitingTime, setWaitingTime] = useState(null);
  const [error, setError] = useState('');
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // 環境変数からURLを取得

  const router = useRouter(); // useRouterフックを初期化

  // 現在の待ち時間を取得
  const fetchWaitingTime = async () => {
    try {
      setError('');
      const response = await fetch(`${backendUrl}/api/wait_time`); // エンドポイントを修正
      const data = await response.json();
      setWaitingTime(data.waitingTime);
    } catch (error) {
      console.error('Error fetching waiting time:', error);
      setError('Failed to fetch waiting time. Please try again.');
    }
  };

  // 行列に参加
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const response = await fetch(`${backendUrl}/api/join`, { // joinエンドポイントを修正
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, peopleCount }),
      });
      if (response.ok) {
        alert('Successfully joined the queue!');
        setName('');
        setEmail('');
        setPeopleCount(1);
        fetchWaitingTime(); // 最新の待ち時間を更新
        router.push('/completed'); // completed.js へ遷移
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to join the queue. Please try again.');
      }
    } catch (error) {
      console.error('Error joining queue:', error);
      setError('Failed to join the queue. Please try again.');
    }
  };

  // ページがロードされたときに待ち時間を取得
  useEffect(() => {
    fetchWaitingTime(); // 初期ロード時に待ち時間を取得
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Smash the LINE!<br /><br />待ち時間をすっ飛ばせ！</h1>

      <div className={styles.ticketInfo}>
        <h2>[特急チケット]</h2>
        <p>
          <strong>A1 5番目</strong> | <strong>500円/人</strong>
        </p>
      </div>

      {/* 待ち時間の表示 */}
      {waitingTime !== null ? (
        <div className={styles.waitingTime}>
          <h3>現在の待ち時間: <strong>{waitingTime} 分</strong></h3>
        </div>
      ) : (
        <div className={styles.waitingTime}>
          <p>待ち時間を取得中...</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          NAME:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="例: 山田 太郎"
            required
            className={styles.input}
          />
        </label>
        <label>
          PERSON:
          <input
            type="number"
            value={peopleCount}
            onChange={(e) => setPeopleCount(parseInt(e.target.value))}
            placeholder="例: 3"
            required
            className={styles.input}
            min="1"
          />
        </label>
        <label>
          MAIL:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="例: example@email.com"
            required
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          特急チケットを申し込む🚀
        </button>
      </form>

      {/* エラーメッセージの表示 */}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
