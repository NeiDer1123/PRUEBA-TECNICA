import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink exact to="/" activeClassName={styles.active}>
        report
      </NavLink>
      <NavLink to="/student" activeClassName={styles.active}>
        Create Student
      </NavLink>
      <NavLink to="/professor" activeClassName={styles.active}>
        Create Professor
      </NavLink>
      <NavLink to="/subject" activeClassName={styles.active}>
        Create Subject
      </NavLink>
    </nav>
  );
}
