import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Paid-Queue.module.css'; // Correct path to styles

export default function PaidQueuePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [peopleCount, setPeopleCount] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const router = useRouter();

  // 行列に参加
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (peopleCount < 1) {
      setError('人数は1人以上でなければなりません。');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${backendUrl}/api/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, peopleCount }),
      });

      if (response.ok) {
        alert('Successfully joined the queue!');
        setName('');
        setEmail('');
        setPeopleCount(1);
        router.push('/completed');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to join the queue. Please try again.');
      }
    } catch (error) {
      console.error('Error joining queue:', error);
      setError('Failed to join the queue. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Smash the WAIT!
      </h1>
      <h2 className={styles.title}>
        待ち時間をすっ飛ばせ!
      </h2>
      <div className={styles.ticketInfo}>
        <h2>[特急券]</h2>
        <p>
          <strong>A1 5番目</strong> | <strong>500円/人</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.labelWrapper}>
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

        <label className={styles.labelWrapper}>
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

        <label className={styles.labelWrapper}>
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

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin /> 送信中...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} /> 申し込む
            </>
          )}
        </button>
      </form>

      {/* エラーメッセージの表示 */}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
