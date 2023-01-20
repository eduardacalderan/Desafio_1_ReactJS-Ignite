import rocketIcon from "../assets/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketIcon} alt="Rocket" />
      <p className={styles.logo}>
        to
        <span>do</span>
      </p>
    </header>
  );
}
