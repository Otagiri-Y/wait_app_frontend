import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
// import OptionItem from '../components/OptionItem'; // Import the OptionItem component
import styles from '../styles/Queue-Info.module.css';

export default function PaidQueuePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

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
            <h1 className={styles.titleMain}>Smash the WAIT!</h1>
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


            <div className={styles.ticketSection}>
                <div className={styles.ticketFree}>
                    <div className={styles.ticketOption}>
                        <div className={styles.circle}></div>
                        <div className={styles.label}>一般　無料</div>
                        <input type="radio" name="ticketType" className={styles.radio} />
                    </div>
                </div>
                <div className={styles.ticketPaid}>
                    <div className={styles.ticketOption}>
                        <div className={styles.circle}>特</div>
                        <div className={styles.label}>5番目　500円/人</div>
                        <input type="radio" name="ticketType" className={styles.radio} />
                    </div>
                    <div className={styles.ticketOption}>
                        <div className={styles.circle}>特</div>
                        <div className={styles.label}>7番目　500円/人</div>
                        <input type="radio" name="ticketType" className={styles.radio} />
                    </div>
                    <div className={styles.ticketOption}>
                        <div className={styles.circle}>特</div>
                        <div className={styles.label}>10番目　500円/人</div>
                        <input type="radio" name="ticketType" className={styles.radio} />
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
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
        </div>
    );
}
