import { useSelector, useDispatch } from "react-redux";
import { getPerson, getSubjects, getTeachers } from "../../redux/actions";
import axios from "axios";
import { useEffect, useState } from "react";
import AssignSubject from "../Modals/AssignSubject";
import { useLocation } from "react-router-dom";

export default function TableTeachers({ handleShowForm,setIsUpdate, setIdToUpdate }) {
  const [show, setShow] = useState(false);
  const [professorId, setProfessorId] = useState()
  const location = useLocation();
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers);
  
  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    setShow(true)
    setProfessorId(e.target.id)
  };

  const handleClick = (e) => {
    const id = e.target.id
    handleShowForm();
    setIsUpdate(true);
    setIdToUpdate(id);
    // Pido los datos de la persona.
    dispatch(getPerson(id, location.pathname));
  }

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
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
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
                <td className="d-flex justify-content-evenly">
                  <button
                    className="btn btn-danger"
                    id={e.identification}
                    onClick={(e) => deleteProfessor(e)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary" id={e.identification} onClick={(e)=> handleClick(e)}>
                    Edit
                  </button>
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
