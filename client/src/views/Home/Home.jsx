import style from "./Home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <NavLink to="/student" className={style.button}>
          See Student
        </NavLink>
        <NavLink to="/professor" className={style.button}>
          See Professor
        </NavLink>
        <NavLink to="/subject" className={style.button}>
          See Subject
        </NavLink>
      </div>
    </div>
  );
}
