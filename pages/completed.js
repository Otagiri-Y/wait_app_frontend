import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faSyncAlt } from '@fortawesome/free-solid-svg-icons'; // 矢印アイコンのインポート
import styles from '../styles/Completed.module.css'; // Path to your CSS module

export default function PaidQueuePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isReloading, setIsReloading] = useState(false);

    const handleReload = () => {
        setIsReloading(true);
        window.location.reload();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            router.push('/queue');
        }, 2000);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titleMain}>Smash the LINE!</h1>
            <h2 className={styles.titleSub}>待ち時間をすっ飛ばせ!</h2>

            <div className={styles.ticketInfo}>
                <h2>[受付完了]</h2>
            </div>

            <div className={styles.text}>
                <div className={styles.label}>受付メールを送付しています。</div>
                <div className={styles.label}>入店時にお見せください。</div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    ⏎トップに戻る
                </button>
            </form>
        </div>
    );
}