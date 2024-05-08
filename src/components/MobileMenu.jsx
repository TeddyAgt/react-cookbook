import styles from "./MobileMenu.module.scss";

function MobileMenu() {
  return (
    <ul className={`${styles.mobileMenu} card p-20`}>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default MobileMenu;
