import validateForm from "./validate";
import style from "../Form.module.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../../../redux/actions";
import { useEffect, useState } from "react";
import { changeString } from "../../../helpers/funtions";
import Swal from "sweetalert2";

export default function FormSubject({
  show,
  handleClose,
  isUpdate,
  idSubject,
}) {
  const dispatch = useDispatch();
  const [dataSubject, setDataSubject] = useState({ name: "" });
  const [errors, setErrors] = useState({ name: "" });
  const subject = useSelector((state) => state.subject);
  const subjects = useSelector((state) => state.subjects);

  useEffect(() => {
    setDataSubject({ name: "" });
  }, [isUpdate]);

  // Conecto mi estado con los valores del Input:
  const handleInputChange = (e) => {
    setDataSubject({
      ...dataSubject,
      [e.target.name]: changeString(e.target.value),
    });
    setErrors(
      validateForm({
        ...dataSubject,
        [e.target.name]: changeString(e.target.value),
      })
    );
  };

  // Valido si el nombre NO esta repetido:
  const validateNameSubject = (name, subjects) => {
    return subjects.some((subject) => subject.name === name);
  };

  const createOrUpdateSubject = async (e) => {
    e.preventDefault();

    if (validateNameSubject(dataSubject.name, subjects))
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya existe una asignatura con este nombre.",
      });

    if (errors.name || !dataSubject.name)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Existen Errores o datos vacios.",
      });

    if (!isUpdate) {
      await axios.post("/subject", dataSubject);
      dispatch(getSubjects());
      setDataSubject({ name: "" });
      return Swal.fire("Buen trabajo!", "Asignatura Creada", "success");
    } else {
      await axios.put(
        `/subject/${idSubject}`,
        dataSubject
      );
      dispatch(getSubjects());
      setDataSubject({ name: "" });
      return Swal.fire("Buen trabajo!", "Asignatura Actualizada", "success");
      
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Creación.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className={style.formGroup}>
              <label htmlFor="name" className={style.label}>
                Nombre:
              </label>
              <input
                className={style.input}
                id="name"
                name="name"
                type="text"
                placeholder={isUpdate ? (subject.name ? subject.name : "") : ""}
                onChange={(e) => handleInputChange(e)}
                value={dataSubject.name}
              />
              {errors.name && (
                <span className={style.error}>{errors.name}</span>
              )}
            </div>
            <div className={style.buttonContainer}>
              {!isUpdate ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={createOrUpdateSubject}
                >
                  Crear
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={createOrUpdateSubject}
                >
                  Actualizar
                </button>
              )}
              <button className="btn btn-secondary" onClick={handleClose}>
                Cerrar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
