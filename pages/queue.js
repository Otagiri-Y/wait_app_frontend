import { useEffect, useState } from 'react';
import QueueTable from '../components/QueueTable';
import styles from '../styles/Queue.module.css';

export default function QueuePage() {
    const [queueData, setQueueData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/queue')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch queue data');
                }
                return res.json();
            })
            .then((data) => {
                setQueueData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Queue</h1>
            <QueueTable data={queueData} />
        </div>
    );
}
