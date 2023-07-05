import { useSelector, useDispatch } from "react-redux";
import { getPerson, getSubjects, getTeachers } from "../../redux/actions";
import axios from "axios";
import { useEffect, useState } from "react";
import AssignSubject from "../Modals/AssignSubject";
import { useLocation } from "react-router-dom";

export default function TableTeachers({
  handleShowForm,
  setIsUpdate,
  setIdToUpdate,
}) {
  const [show, setShow] = useState(false);
  const [professorId, setProfessorId] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers);
  const subjects = useSelector((state) => state.subjects);

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    setShow(true);
    setProfessorId(e.target.id);
  };

  const handleClick = (e) => {
    const id = e.target.id;
    handleShowForm();
    setIsUpdate(true);
    setIdToUpdate(id);
    // Pido los datos de la persona.
    dispatch(getPerson(id, location.pathname));
  };

  useEffect(() => {
    dispatch(getTeachers());
    dispatch(getSubjects());
  }, [dispatch]);

  const searchSubject = (subjects, idProfessor) => {
    const subject = subjects.filter((subject) => subject.professorId == idProfessor);
    const obj = Object.fromEntries
    return subject;
  };

  const deleteProfessor = async (e) => {
    const id = e.target.id;
    await axios.delete(`http://localhost:3001/professor/${id}`);
    dispatch(getTeachers());
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="text-center">
            <th scope="col">Identificación</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Asignatura</th>
            <th scope="col">Acciones</th>
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
                  {searchSubject(subjects, e.identification).length
                    ? searchSubject(subjects, e.identification)[0].name
                    : "No subject"}
                </td>
                <td className="d-flex justify-content-evenly">
                  <button
                    className="btn btn-danger"
                    id={e.identification}
                    onClick={(e) => deleteProfessor(e)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-primary"
                    id={e.identification}
                    onClick={(e) => handleClick(e)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-info"
                    id={e.identification}
                    onClick={(e) => handleShow(e)}
                    disabled={searchSubject(subjects, e.identification).length ? true : false}
                  >
                    Asignar Materia
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AssignSubject
        show={show}
        handleClose={handleClose}
        professorId={professorId}
      />
    </div>
  );
}
