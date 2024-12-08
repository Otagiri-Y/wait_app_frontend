import { useState } from 'react';
import styles from '../styles/Completed.module.css';

export default function PaidQueuePage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [peopleCount, setPeopleCount] = useState(1);
    const [waitingTime, setWaitingTime] = useState(null);
    const [error, setError] = useState('');
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // 環境変数からURLを取得
  
    // 現在の待ち時間を取得
    const fetchWaitingTime = async () => {
      try {
        setError('');
        const response = await fetch(`${backendUrl}/api/wait_time`);
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
        const response = await fetch(`${backendUrl}/api/wait_time`, {
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
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to join the queue. Please try again.');
        }
      } catch (error) {
        console.error('Error joining queue:', error);
        setError('Failed to join the queue. Please try again.');
      }
    };
  
    return (
      <div className={styles.container}>
    <h1 className={styles.title}>Smash the LINE!<br /><br />待ち時間をすっ飛ばせ！</h1>
  
    <div className={styles.ticketInfo}>
      <h2>[受付完了]</h2>
      <p>
        <strong>受付メールを送付しています。入店時にお見せください。</strong>
      </p>
    </div>
  
    <form onSubmit={handleSubmit} className={styles.form}>
      <button type="submit" className={styles.submitButton}>
        ⏎トップに戻る
      </button>
    </form>
  </div>
    );
  }
