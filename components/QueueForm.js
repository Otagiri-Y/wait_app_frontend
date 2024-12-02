import { useState } from 'react';

const QueueForm = () => {
    const [name, setName] = useState('');
    const [peopleCount, setPeopleCount] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/queue', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, peopleCount }),
        });
        alert('You have been added to the queue!');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                min="1"
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2">
                Join Queue
            </button>
        </form>
    );
};

export default QueueForm;
