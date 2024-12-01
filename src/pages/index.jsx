import QueueForm from "../components/QueueForm";
import QueueList from "../components/QueueList";
import QueueStatus from "../components/QueueStatus";

export default function Home() {
  return (
    <div>
      <h1>キュー管理システム</h1>
      <QueueForm />
      <QueueList />
      <QueueStatus />
    </div>
  );
}
