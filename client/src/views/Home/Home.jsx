import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getReport } from "../../redux/actions";
import TableReport from "../../components/Tables/TableReport"
// import styles from "../index.css"

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReport());
  }, [dispatch]);

  return (
    <div className={`container mt-5`}>
      <h1 className="text-center mb-5">Información Académica</h1>
      <TableReport/>
    </div>
  );
}
