import styles from '../styles/Admin-Delete.module.css';

const AdminDelete = () => {
    const handleDelete = async () => {
        await fetch('/api/admin', { method: 'DELETE' });
        alert('Queue cleared!');
    };

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Admin Queue Management</h1>
            <button onClick={handleDelete} className="bg-red-500 text-white p-2">
                Clear Queue
            </button>
        </div>
    );
};

export default AdminDelete;
