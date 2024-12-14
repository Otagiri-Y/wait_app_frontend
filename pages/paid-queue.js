import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Paid-Queue.module.css';

export default function PaidQueuePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people_count, setPeopleCount] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Form validation
    if (people_count < 1) {
      setError('人数は1人以上でなければなりません。');
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('有効なメールアドレスを入力してください。');
      return;
    }
  
    setError('');
    setLoading(true);

    // Convert form data to JSON
    const formData = new FormData(e.target);
    const body_msg = JSON.stringify({
      name: formData.get("name"),
      email: formData.get("mail_address"),
      people_count: parseInt(formData.get("people_count"), 10), // corrected to parse as integer
    });
  
    try {
        console.log('Step 1: Preparing to send POST request');
        console.log('Sending POST request to:', `${backendUrl}/api/join`);
        console.log('Request body:', body_msg);
    
        const response = await fetch(`${backendUrl}/api/join`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body_msg
        });
    
        console.log('Step 2: POST request sent, awaiting response');
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
    
        if (!response.ok) {
            console.log('Step 3: Response not OK');
            throw new Error(`リクエストは失敗しました: ${response.statusText}`);
        }
    
        console.log('Step 4: Response OK, parsing JSON');
        const data = await response.json();
        console.log('Step 5: JSON parsed successfully:', data);
    
        // Success handling
        console.log('Step 6: Handling successful response');
        setName('');
        setEmail('');
        setPeopleCount(1);
        router.push('/completed');
    } catch (error) {
        console.error('Error caught:', error.message);
        setError(`行列に参加できませんでした。エラー: ${error.message}`);
    } finally {
        console.log('Step 7: Finished try-catch-finally block');
        setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
          <img src="../samurai.png" alt="Samurai Image" className={styles.image} />
      </div>
      <h1 className={styles.titleMain}>
        Smash the WAIT!
      </h1>
      <h2 className={styles.titleSub}>
        待ち時間をすっ飛ばせ!
      </h2>
      <div className={styles.ticketInfo}>
        <h2>[特急券]</h2>
      </div>
      <div className={styles.additionalText}>
                <a>らーめん</a>
                <h2>麺屋 紫侍</h2>
    　</div>
      <div className={styles.ticketCost}><h2>
            A1 | 5番目 | 500円/人
      </h2></div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.labelWrapper}>
          NAME:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="MURASAKI"
            required
            className={styles.input}
          />
        </label>

        <label className={styles.labelWrapper}>
          MAIL:
          <input
            type="email"
            name="mail_address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="***@email.com"
            required
            className={styles.input}
          />
        </label>

        <label className={styles.labelWrapper}>
          PERSON:
          <input
            type="number"
            name="people_count"
            value={people_count}
            onChange={(e) => setPeopleCount(parseInt(e.target.value, 10))}
            placeholder="3"
            required
            className={styles.input}
            min="1"
          />
        </label>

        <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? (
        <>
            <FontAwesomeIcon icon={faSpinner} spin />&nbsp;送信中...
        </>
        ) : (
        <>
            <FontAwesomeIcon icon={faPaperPlane} />&nbsp;申し込む
        </>
        )}
        </button>
      </form>

      {/* エラーメッセージの表示 */}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
