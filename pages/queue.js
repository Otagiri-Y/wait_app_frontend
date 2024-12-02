import { useEffect, useState } from 'react';
import QueueTable from '../components/QueueTable';

export default function QueuePage() {
    const [queueData, setQueueData] = useState([]);

    useEffect(() => {
        fetch('/api/queue')
            .then((res) => res.json())
            .then((data) => setQueueData(data));
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Queue</h1>
            <QueueTable data={queueData} />
        </div>
    );
}
