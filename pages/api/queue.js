const queueData = [
    { id: 1, name: 'Alice', email: 'alice@example.com', peopleCount: 3 },
    { id: 2, name: 'Bob', email: 'bob@example.com', peopleCount: 2 },
];

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(queueData);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
