import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getSubjects } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function AssignSubject({ show, handleClose, professorId }) {
  const [subjectSelected, setSubjectSelected] = useState("");
  const subjects = useSelector((state) => state.subjects);
  const dispatch = useDispatch()

  const teacherWhitoutSubject = subjects.filter((e)=>{
    return e.professorId === null
  })

  console.log(teacherWhitoutSubject)

  const handleOptionChange = (e) => {
    setSubjectSelected(e.target.value);
  };

  const handleSubmit = async () => {
    const body = {
      professorId: professorId,
    };
    await axios.put(`http://localhost:3001/subject/${subjectSelected}`, body);

    // Actualizo el arreglo de asignaturas, para el filtrado de profesores sin asignaturas:
    dispatch(getSubjects());
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subjects Available.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            className="form-select"
            aria-label="Choose the subject"
            value={subjectSelected}
            onChange={handleOptionChange}
          >
            <option value="">Subjects without a professor:</option>
            {teacherWhitoutSubject.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
