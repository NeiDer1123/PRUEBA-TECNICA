import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import validate from "./validate";

export default function AssingRatings({ show, handleClose, studentId }) {
  const [subjectSelected, setSubjectSelected] = useState("");
  const subjects = useSelector((state) => state.subjects);
  const ratings = useSelector((state) => state.ratings);
  const [rating, setRating] = useState({ academicYear: "", rating: "" });
  const [errors, setErrors] = useState({ academicYear: "", rating: "" });

  const subjectsWithProfessor = subjects.filter(
    (subject) => subject.professorId !== null
  );

  const handleInputChange = (e) => {
    setRating({
      ...rating,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...rating,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleOptionChange = (e) => {
    setSubjectSelected(e.target.value);
  };

  // Se valida que no se ingrese la misma calificacion a una materia en el mismo año.
  const validateRaitingSubject = (newData, oldData) => {
    return oldData.some((e) => {
      console.log(e.academicYear);
      console.log(newData.academicYear);
      return (
        e.academicYear === parseInt(newData.academicYear) &&
        e.Subject.id === parseInt(newData.subjectId)
      );
    });
  };

  const handleSubmit = async () => {
    if (errors.academicYear || errors.rating || !subjectSelected) {
      return alert("No debe haber ningun campo vacio o con errores");
    }
    try {
      const body = {
        academicYear: rating.academicYear,
        rating: rating.rating,
        studentId,
        subjectId: subjectSelected,
      };
      if (validateRaitingSubject(body, ratings))
        return alert("Esta materia ya tiene una calificacion en ese año");
      await axios.post(`http://localhost:3001/rating`, body);
      setRating({ academicYear: "", rating: "" });
      setErrors({ academicYear: "", rating: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Asigna la calificación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-4">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Año Académico"
                aria-label="First name"
                name="academicYear"
                value={rating.academicYear}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.academicYear && <span className="text-danger small">{errors.academicYear}</span>}
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Calificación"
                aria-label="Last name"
                name="rating"
                value={rating.rating}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.rating && <span className="text-danger small">{errors.rating}</span>}
            </div>
          </div>
          <select
            className={`form-select ${!subjectSelected ? "text-danger" : ""}`}
            aria-label="Choose the subject"
            value={subjectSelected}
            onChange={handleOptionChange}
          >
            <option value="" className="text-danger">
              Debes elegir una asignatura:
            </option>
            {subjectsWithProfessor.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
          {subjectsWithProfessor.length === 0 ? (
            <span className="text-primary small">Solo aparecerán las materias con profesores asignados.*</span>
          ) : null}
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
