import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AdminNavigation from "./components/AdminNavigation/AdminNavigation";
import styles from "./Admin.module.scss";

function Admin() {
  return (
    <main
      className={`${styles.container} flex-fill container p-20 d-flex p-20`}>
      <AdminNavigation />
      <section className="d-flex-flex-column flex-fill">
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
}

export default Admin;
