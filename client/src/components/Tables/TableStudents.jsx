import { useDispatch, useSelector } from "react-redux";
import { getStudets, getSubjects } from "../../redux/actions";
import style from "./Tables.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AssingRatings from "../Modals/AssignRatings";

export default function TableStudents() {
  const [show, setShow] = useState(false);
  const [studentId, setStudentId] = useState();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    setShow(true);
    setStudentId(e.target.id);
  };

  useEffect(() => {
    dispatch(getStudets());
    dispatch(getSubjects());
  }, [dispatch]);

  const deleteStudent = async (e) => {
    const id = e.target.id;
    await axios.delete(`http://localhost:3001/student/${id}`);
    dispatch(getStudets());
  };

  return (
    <div className={style.container}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Identification</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.identification}</td>
                <td>{e.name}</td>
                <td>{e.lastName}</td>
                <td>{e.age}</td>
                <td>{e.address}</td>
                <td>{e.phone}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    id={e.identification}
                    onClick={(e) => deleteStudent(e)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary" id={e.identification}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-info" id={e.identification} onClick={(e)=> handleShow(e)}>
                    Assign Ratings
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AssingRatings show={show} handleClose={handleClose} studentId={studentId}/>
    </div>
  );
}
