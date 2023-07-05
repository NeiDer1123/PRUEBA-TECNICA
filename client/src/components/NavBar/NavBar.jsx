import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink exact to="/" className="btn btn-light">
        Report
      </NavLink>
      <NavLink to="/student" className="btn btn-light">
        Student
      </NavLink>
      <NavLink to="/professor" className="btn btn-light">
        Professor
      </NavLink>
      <NavLink to="/subject" className="btn btn-light">
        Subject
      </NavLink>
    </nav>
  );
}
