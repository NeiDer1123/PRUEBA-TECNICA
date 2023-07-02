import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
        <NavLink exact to="/" activeClassName={styles.active}>
          Home
        </NavLink>
    </nav>
  );
}
