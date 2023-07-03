import { useSelector, useDispatch } from "react-redux";
import { getSubjects, getTeachers } from "../../redux/actions";
import style from "./Tables.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AssignSubject from "../Modals/AssignSubject";

export default function TableTeachers() {
  const [show, setShow] = useState(false);
  const [professorId, setProfessorId] = useState()

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    setShow(true)
    setProfessorId(e.target.id)
  };

  const dispatch = useDispatch();

  const teachers = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(getTeachers());
    dispatch(getSubjects());
  }, [dispatch]);

  const deleteProfessor = async (e) => {
    const id = e.target.id;
    await axios.delete(`http://localhost:3001/professor/${id}`);
    dispatch(getTeachers());
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
          {teachers.map((e, i) => {
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
                    onClick={(e) => deleteProfessor(e)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary" id={e.identification}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-info" id={e.identification} onClick={(e)=> handleShow(e)}>
                    Assign Subject
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AssignSubject show={show} handleClose={handleClose} professorId={professorId}/>
    </div>
  );
}
