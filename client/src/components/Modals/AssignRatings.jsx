import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validate";
import { getRatingsOfStudent, getReport } from "../../redux/actions";
import styles from "../Form/Form.module.css"
import Swal from "sweetalert2";

export default function AssingRatings({ show, handleClose, studentId }) {
  const [subjectSelected, setSubjectSelected] = useState("");
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects);
  const ratings = useSelector((state) => state.ratings);
  const [rating, setRating] = useState({ academicYear: "", rating: "" });
  const [errors, setErrors] = useState({ academicYear: "", rating: "" });

  const subjectsWithProfessor = subjects.filter(
    (subject) => subject.professorId !== null
  );

  useEffect(() => {
    dispatch(getReport());
  }, [dispatch]);

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
      return (
        e.academicYear === parseInt(newData.academicYear) &&
        e.Subject.id === parseInt(newData.subjectId)
      );
    });
  };

  const handleSubmit = async () => {
    if (errors.academicYear || errors.rating || !subjectSelected) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No debe haber ningun campo vacio o con errores.",
      });
    }
    try {
      const body = {
        academicYear: rating.academicYear,
        rating: rating.rating,
        studentId,
        subjectId: subjectSelected,
      };
      if (validateRaitingSubject(body, ratings)){
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Esta materia ya tiene una calificación en ese año.",
        });
      }

      await axios.post(`/rating`, body);
      //Actualizo y Seteo la informacion
      dispatch(getReport());
      dispatch(getRatingsOfStudent(studentId))
      setRating({ academicYear: "", rating: "" });
      setErrors({ academicYear: "", rating: "" });

      return Swal.fire("Buen trabajo!", "Calificion asignada correctamente", "success");
    } catch (error) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No fue posible realizar la Actualizacion.",
      });
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.modelTittle}>Asigna la calificación</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.formGroup}>
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
              {errors.academicYear && (
                <span className="text-danger small">{errors.academicYear}</span>
              )}
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
              {errors.rating && (
                <span className="text-danger small">{errors.rating}</span>
              )}
            </div>
          </div>
          {subjectsWithProfessor.length === 0 ? (
            <span className="text-primary small">
              Solo aparecerán las materias con profesores asignados.*
            </span>
          ) : null}
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
        </Modal.Body>
        <Modal.Footer className={styles.buttonContainer}>
          <Button variant="primary" onClick={handleSubmit}>
            Asignar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
