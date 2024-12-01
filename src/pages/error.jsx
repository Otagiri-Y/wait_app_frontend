import { useRouter } from "next/router";

export default function ErrorPage({ message }) {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>エラーが発生しました</h1>
      <p style={styles.message}>{message || "不明なエラーが発生しました。"}</p>
      <button onClick={handleBackToHome} style={styles.button}>
        ホームに戻る
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "20px",
  },
  header: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  message: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#f5c6cb",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    color: "#721c24",
    fontWeight: "bold",
  },
};
