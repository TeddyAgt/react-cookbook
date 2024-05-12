import styles from "./Header.module.scss";
import logo from "../../assets/images/cookchef.png";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import { NavLink } from "react-router-dom";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex align-items-center`}>
      <div className="flex-fill">
        <NavLink to={"/"}>
          <img
            src={logo}
            alt=""
          />
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <li>
          <button className="mr-15 btn btn--reverse-primary">
            <i className="fa-solid fa-heart mr-5"></i>
            <span>Wishlist</span>
          </button>
        </li>
        <li>
          <button className="btn btn--primary mr-15">Connexion</button>
        </li>
        <li>
          <NavLink to={"admin"}>
            <button className="btn btn--primary">Admin</button>
          </NavLink>
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
