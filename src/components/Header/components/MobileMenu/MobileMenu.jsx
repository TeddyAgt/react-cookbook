import styles from "./MobileMenu.module.scss";

function MobileMenu({ setPage }) {
  return (
    <ul className={`${styles.mobileMenu} card p-20`}>
      <li>Wishlist</li>
      <li>Connexion</li>
      <li onClick={() => setPage("admin")}>Ajouter une recette</li>
    </ul>
  );
}

export default MobileMenu;
