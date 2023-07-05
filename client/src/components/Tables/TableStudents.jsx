import { useDispatch, useSelector } from "react-redux";
import { getPerson, getRatingsOfStudent, getStudets, getSubjects } from "../../redux/actions";
import axios from "axios";
import { useEffect, useState } from "react";
import AssingRatings from "../Modals/AssignRatings";
import { useLocation } from "react-router-dom";

export default function TableStudents({handleShowForm,setIsUpdate, setIdToUpdate}) {
  const [show, setShow] = useState(false);
  const [studentId, setStudentId] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const report = useSelector((state) => state.report)

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    const id = e.target.id
    setShow(true);
    setStudentId(id);
    dispatch(getRatingsOfStudent(id))
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
    dispatch(getStudets());
    dispatch(getSubjects());
  }, [dispatch]);

  const deleteStudent = async (e) => {
    const id = e.target.id;
    await axios.delete(`/student/${id}`);
    dispatch(getStudets());
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
            <th scope="col">Acciones</th>
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
                <td className="d-flex justify-content-evenly">
                  <button
                    className="btn btn-danger"
                    id={e.identification}
                    onClick={(e) => deleteStudent(e)}
                    disabled={report.length ? report.some((item) => item.studentId === e.identification) : false}
                  >
                    Eliminar
                  </button>
                  <button className="btn btn-primary" id={e.identification} onClick={(e)=> handleClick(e)}>
                    Editar
                  </button>
                  <button className="btn btn-info" id={e.identification} onClick={(e)=> handleShow(e)}>
                    Asignar Calificación
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
