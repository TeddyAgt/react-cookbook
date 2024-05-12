import { NavLink } from "react-router-dom";
import styles from "./MobileMenu.module.scss";

function MobileMenu() {
  return (
    <ul className={`${styles.mobileMenu} card p-20`}>
      <li>Wishlist</li>
      <li>Connexion</li>
      <li>
        <NavLink to={"admin"}>Ajouter une recette</NavLink>
      </li>
    </ul>
  );
}

export default MobileMenu;
