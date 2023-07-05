import { useEffect } from "react";
import TableReport from "../../components/Tables/TableReport";
import style from "./Home.module.css";
import { useDispatch } from "react-redux";
import { getReport } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getReport())
  }, [dispatch])

  return (
    <div className={style.container}>
      <div className="container">
        <TableReport/>
      </div>
    </div>
  );
}
