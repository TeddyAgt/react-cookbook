import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${styles.footer} flex-center p-20`}>
      <p>Copyright © 2024 CookBook</p>
    </footer>
  );
}

export default Footer;
