import { useEffect } from "react";
import TableReport from "../../components/Tables/TableReport";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getReport } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getReport())
  }, [dispatch])

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
      <div>
        <TableReport/>
      </div>
    </div>
  );
}
