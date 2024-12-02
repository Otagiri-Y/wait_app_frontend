import { useEffect, useState } from 'react';
import QueueTable from '../components/QueueTable';

const QueueInfo = () => {
    const [queueData, setQueueData] = useState([]);

    useEffect(() => {
        fetch('/api/queue')
            .then((res) => res.json())
            .then((data) => setQueueData(data));
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Queue Information</h1>
            <QueueTable data={queueData} />
        </div>
    );
};

export default QueueInfo;
