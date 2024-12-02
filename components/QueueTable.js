
const QueueTable = ({ data }) => (
    <table className="min-w-full border border-gray-300">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>People Count</th>
                <th>Waiting Time</th>
            </tr>
        </thead>
        <tbody>
            {data.map((entry) => (
                <tr key={entry.id}>
                    <td>{entry.id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.peopleCount}</td>
                    <td>{entry.waitingTime}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default QueueTable;
