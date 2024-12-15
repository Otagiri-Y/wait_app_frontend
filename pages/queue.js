import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Queue.module.css';

export default function PaidQueuePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState('ja'); // Default to Japanese

    // Hook to handle language change from URL query
    useEffect(() => {
        if (router.query.lang) {
            const lang = router.query.lang;
            setLanguage(lang);
        } else {
            setLanguage('ja'); // Set default to Japanese if no lang is present
        }
    }, [router.query.lang]);

    const translations = {
        en: {
            titleMain: "Smash the LINE!",
            titleSub: "Skip the procession!",
            ticketInfo: "[Limited express ticket]",
            additionalTextA: "ramen",
            additionalText: "men-ya murasaki-samurai",
            ticketCost: "about 30 groups | (about 90 min)",
            queueTitleLabel: "No name groups",
            queueTitleTime: "min",
            queueSections: [
                { label: "No.1 suzuki 1", time: "5min" },
                { label: "No.2 tanaka 2", time: "7min" },
                { label: "No.3 saito 4", time: "15min" },
                { label: "No.4 yamada 3", time: "20min" },
                { label: "No.A1 MURASAKI 3", time: "25min" }
            ],
            buttonLabels: {
                submit: "Join the queue",
                submitting: "Submitting..."
            }
        },
        zh: {
            titleMain: "Smash the LINE!",
            titleSub: "隊被赶上!",
            ticketInfo: "[特急券]",
            additionalTextA: "拉面",
            additionalText: "麺屋 紫侍",
            ticketCost: "30组排队 | （约90分钟）",
            queueTitleLabel: "No 名称 人数",
            queueTitleTime: "分钟",
            queueSections: [
                { label: "No.1 suzuki 1", time: "5min" },
                { label: "No.2 tanaka 2", time: "7min" },
                { label: "No.3 saito 4", time: "15min" },
                { label: "No.4 yamada 3", time: "20min" },
                { label: "No.A1 MURASAKI 3", time: "25min" }
            ],
            buttonLabels: {
                submit: "排隊",
                submitting: "送信中..."
            }
        },
        ja: {
            titleMain: "Smash the LINE!",
            titleSub: "行列をすっ飛ばせ!",
            ticketInfo: "[特急券]",
            additionalTextA: "らーめん",
            additionalText: "麺屋 紫侍",
            ticketCost: "30組待ち | 約90分",
            queueTitleLabel: "No 名前 人数",
            queueTitleTime: "分",
            queueSections: [
                { label: "No.1 suzuki 1", time: "5分" },
                { label: "No.2 tanaka 2", time: "7分" },
                { label: "No.3 saito 4", time: "15分" },
                { label: "No.4 yamada 3", time: "20分" },
                { label: "No.A1 MURASAKI 3", time: "25分" }
            ],
            buttonLabels: {
                submit: "申し込む",
                submitting: "送信中..."
            }
        }
    };

    const getTranslation = (key) => {
        const keys = key.split('.'); // ドット区切りでキーを分割
        let value = translations[language];
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        return value || key; // 存在しない場合はデフォルトでキーを返す
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            router.push('/queue-info');
        }, 500);
    };

    return (
        <div className={`${styles.container} ${language === 'zh' ? styles.container_zh : ''}`}>
            <div className={styles.imageContainer}>
                <img src="../samurai.png" alt="Samurai Image" className={styles.image} />
            </div>
            <h1 className={`${styles.titleMain} ${language === 'zh' ? styles.titleMain_zh : ''}`}>{getTranslation('titleMain')}</h1>
            <h2 className={`${styles.titleSub} ${language === 'zh' ? styles.titleSub_zh : ''}`}>{getTranslation('titleSub')}</h2>

            <div className={styles.ticketInfo}>
                <h2>{getTranslation('ticketInfo')}</h2>
            </div>

            <div className={styles.additionalText}>
                <a>{getTranslation('additionalTextA')}</a>
                <h2>{getTranslation('additionalText')}</h2>
            </div>

            <div className={styles.ticketCost}>
                <h2>{getTranslation('ticketCost')}</h2>
            </div>
            
            <div className={styles.QueueTitle}>
                <div className={styles.label}>{getTranslation('queueTitleLabel')}</div>
                <div className={styles.time}>{getTranslation('queueTitleTime')}</div>
            </div>

            {translations[language].queueSections.map((section, index) => (
                <div key={index} className={styles.QueueSection}>
                    <div className={styles.label}>{section.label}</div>
                    <div className={styles.time}>{section.time}</div>
                </div>
            ))}

            <form onSubmit={handleSubmit} className={styles.form}>
                <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? (
                    <>
                        <FontAwesomeIcon icon={faSpinner} spin />&nbsp;{getTranslation('buttonLabels.submitting')}
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faPaperPlane} />&nbsp;{getTranslation('buttonLabels.submit')}
                    </>
                )}

                </button>
            </form>
        </div>
    );
}
