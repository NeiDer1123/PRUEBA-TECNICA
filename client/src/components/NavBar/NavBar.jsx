import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={`grid text-center p-2 ${styles.container}`}>
      <NavLink exact to="/" className="btn btn-light m-2 px-4">
        Reporte
      </NavLink>
      <NavLink to="/student" className="btn btn-light m-2 px-4">
        Estudiantes
      </NavLink>
      <NavLink to="/professor" className="btn btn-light m-2 px-4">
        Profesores
      </NavLink>
      <NavLink to="/subject" className="btn btn-light m-2 px-4">
        Asignaturas
      </NavLink>
    </nav>
  );
}
