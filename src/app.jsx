import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import ErrorPage from "./pages/error";

export default function App() {
  return (
    <Router>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>キュー管理アプリ</h1>
        </header>
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/error" element={<ErrorPage message="エラーが発生しました。" />} />
          </Routes>
        </main>
        <footer style={styles.footer}>
          <p>© 2024 キュー管理システム</p>
        </footer>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
  },
  main: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  footer: {
    backgroundColor: "#4caf50",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
  },
};
