import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'; // 矢印アイコンのインポート
import styles from '../styles/Queue.module.css'; // Path to your CSS module

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
            router.push('/paid-queue');
        }, 2000);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titleMain}>Smash the LINE!</h1>
            <h2 className={styles.titleSub}>待ち時間をすっ飛ばせ!</h2>

            <div className={styles.ticketInfo}>
                <h2>[特急券]</h2>
            </div>

            <div className={styles.additionalText}>
                <a>らーめん</a>
                <h2>麺屋 紫侍</h2>
            </div>

            <div className={styles.ticketCost}>
                <h2>30組待ち | （約90分）</h2>
            </div>

            <div className={styles.QueueTitle}>
                <div className={styles.label}>No  name 人数</div>
                <div className={styles.time}>min</div>
            </div>

            <div className={styles.QueueSection}>
                <div className={styles.label}>No.1 suzuki 1</div>
                <div className={styles.time}>5min</div>
            </div>
            <div className={styles.QueueSection}>
                <div className={styles.label}>No.2 tanaka 2</div>
                <div className={styles.time}>7min</div>
            </div>
            <div className={styles.QueueSection}>
                <div className={styles.label}>No.3 saito 4</div>
                <div className={styles.time}>15min</div>
            </div>
            <div className={styles.QueueSection}>
                <div className={styles.label}>No.4 yamada 3</div>
                <div className={styles.time}>20min</div>
            </div>

            <div className={styles.QueueSection}>
                <div className={styles.label}>No.A1 MURASAKI 3</div>
                <div className={styles.time}>255min</div>
            </div>

            <button type="button" onClick={handleReload} className={`${styles.reloadButton} ${isReloading ? styles.reloading : ''}`}>
                <FontAwesomeIcon icon={faSyncAlt} className={styles.icon} />
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    {loading ? (
                        <>
                            <FontAwesomeIcon icon={faSpinner} spin />&nbsp;送信中...
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faPaperPlane} />&nbsp;行列に並ぶ
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
