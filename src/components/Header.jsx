import styles from "./Header.module.scss";
import logo from "../assets/images/cookchef.png";

function Header() {
  return (
    <header className={`${styles.header} d-flex align-items-center`}>
      <i className="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={logo} alt="" />
      </div>
      <ul className="d-flex align-items-center">
        <li>
          <button className="mr-5 btn btn--reverse-primary">
            <i className="fa-solid fa-basket-shopping mr-5"></i>
            <span>Panier</span>
          </button>
        </li>
        <li>
          <button className="btn btn--primary">Connexion</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
