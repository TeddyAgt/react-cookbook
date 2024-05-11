import { useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Admin from "./pages/Admin/Admin";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
// import { seedDB } from "./data/seed";
// seedDB();

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} />
      {page === "homepage" && <Homepage />}
      {page === "admin" && <Admin />}
      <Footer />
    </div>
  );
}

export default App;

