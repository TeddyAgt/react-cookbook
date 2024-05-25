import { NavLink } from "react-router-dom";
import styles from "./MobileMenu.module.scss";

function MobileMenu({ displayWishList, hideMenu }) {
  return (
    <ul
      onClick={hideMenu}
      className={`${styles.mobileMenu} card p-20`}>
      <li onClick={displayWishList}>Wishlist</li>
      <li>
        <NavLink to={"admin"}>Admin</NavLink>
      </li>
    </ul>
  );
}

export default MobileMenu;
