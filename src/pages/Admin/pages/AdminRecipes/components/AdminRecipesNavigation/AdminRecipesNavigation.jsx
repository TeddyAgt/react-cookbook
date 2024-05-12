import { NavLink } from "react-router-dom";
import styles from "./AdminRecipesNavigation.module.scss";

function AdminRecipesNavigation() {
  return (
    <nav className={styles.adminRecipesNavigation}>
      <NavLink
        to={"list"}
        className={({ isActive }) => (isActive ? styles.navLinkActive : "")}>
        Liste des recettes
      </NavLink>
      <NavLink
        to={"new"}
        className={({ isActive }) => (isActive ? styles.navLinkActive : "")}>
        Ajouter une recette
      </NavLink>
    </nav>
  );
}

export default AdminRecipesNavigation;
