import { Outlet } from "react-router-dom";
import AdminNavigation from "./components/AdminNavigation/AdminNavigation";
import { Suspense } from "react";

function Admin() {
  return (
    <main className={`flex-fill container p-20 d-flex p-20`}>
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
