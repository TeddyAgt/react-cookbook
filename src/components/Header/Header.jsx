import styles from "./Header.module.scss";
import logo from "../../assets/images/cookchef.png";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex align-items-center`}>
      <div className="flex-fill">
        <img
          src={logo}
          alt=""
        />
      </div>
      <ul className={styles.headerList}>
        <li>
          <button className="mr-5 btn btn--reverse-primary">
            <i className="fa-solid fa-heart mr-5"></i>
            <span>Wishlist</span>
          </button>
        </li>
        <li>
          <button className="btn btn--primary">Connexion</button>
        </li>
      </ul>

      <i
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className={`fa-solid fa-bars ${styles.headerXs}`}></i>

      {showMobileMenu && (
        <>
          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="calc"></div>
          <MobileMenu />
        </>
      )}
    </header>
  );
}

export default Header;