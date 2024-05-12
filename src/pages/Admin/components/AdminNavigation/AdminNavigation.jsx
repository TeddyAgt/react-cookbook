import { NavLink } from "react-router-dom";
import styles from "./AdminNavigation.module.scss";

function AdminNavigation() {
  return (
    <aside>
      <nav className={`${styles.adminNavigation} d-flex flex-column`}>
        <NavLink
          to={"recipes"}
          className={({ isActive }) => (isActive ? styles.navLinkActive : "")}>
          Recettes
        </NavLink>
        <NavLink
          to={"users"}
          className={({ isActive }) => (isActive ? styles.navLinkActive : "")}>
          Utilisateurs
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminNavigation;
