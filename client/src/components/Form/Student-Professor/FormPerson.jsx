import { validateForm, verifyData, verifyError } from "./validate";
import style from "../Form.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getStudets, getTeachers } from "../../../redux/actions";
import { useState, useEffect } from "react";
import { changeString } from "../../../helpers/funtions";
import Swal from "sweetalert2";

export default function FormPerson({
  show,
  handleClose,
  isUpdate,
  idToUpdate,
}) {
  const location = useLocation();
  const dispatch = useDispatch();
  const person = useSelector((state) => state.person);
  const [dataPerson, setDataPerson] = useState({
    identification: "",
    name: "",
    lastName: "",
    age: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    identification: "",
    name: "",
    lastName: "",
    age: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    resetValues();
  }, [isUpdate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataPerson({
      ...dataPerson,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: validateForm({
        ...errors,
        [name]: value,
      })[name],
    });
  };

  const resetValues = () => {
    setDataPerson({
      identification: "",
      name: "",
      lastName: "",
      age: "",
      address: "",
      phone: "",
    });
    setErrors({
      identification: "",
      name: "",
      lastName: "",
      age: "",
      address: "",
      phone: "",
    });
  };

  const createPerson = async (e) => {
    e.preventDefault();

    // Verifico que no hayan campos vacios ni errores:
    if (verifyData(dataPerson) || verifyError(errors)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puede haber campos vacios o errores.",
      });
    }

    if (location.pathname === "/student") {
      try {
        await axios.post("/student", dataPerson);
        resetValues();
        dispatch(getStudets());

        Swal.fire("Buen trabajo!", "Estudiante Creado", "success");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ya hay un profesor o estudiante con ese ID!",
        });
      }
    } else {
      try {
        await axios.post("/professor", dataPerson);
        resetValues();
        dispatch(getTeachers());
        return Swal.fire("Buen trabajo!", "Profesor Creado", "success");
      } catch (error) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ya hay un profesor o estudiante con ese ID!",
        });
      }
    }
  };

  const updatePerson = async (e) => {
    e.preventDefault();

    // Filtro solo los valores que tienen informacion:
    const body = Object.fromEntries(
      Object.entries(dataPerson).filter(([key, value]) => value !== "")
    );

    if (location.pathname === "/student") {
      try {
        await axios.put(`/student/${idToUpdate}`, body);
        resetValues();
        dispatch(getStudets());
      } catch (error) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No fue posible realizar la actualización",
        });
      }
    } else {
      try {
        await axios.put(`/professor/${idToUpdate}`, body);
        resetValues();
        dispatch(getTeachers());
      } catch (error) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No fue posible realizar la actualización",
        });
      }
    }
    return Swal.fire("Buen trabajo!", "Datos actualizados correctamente", "success");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="identification" className={style.label}>
              Identificación:
            </label>
            <input
              className={style.input}
              id="identification"
              name="identification"
              type="number"
              value={dataPerson.identification}
              placeholder={
                isUpdate
                  ? person.identification
                    ? person.identification
                    : ""
                  : ""
              }
              onChange={(e) => handleInputChange(e)}
            />
            {errors.identification && (
              <span className={style.error}>{errors.identification}</span>
            )}
          </div>

          <div className={style.formGroup}>
            <label htmlFor="name" className={style.label}>
              Nombre:
            </label>
            <input
              className={style.input}
              id="name"
              name="name"
              type="text"
              value={changeString(dataPerson.name)}
              placeholder={isUpdate ? (person.name ? person.name : "") : ""}
              onChange={(e) => handleInputChange(e)}
            />
            {errors.name && <span className={style.error}>{errors.name}</span>}
          </div>

          <div className={style.formGroup}>
            <label htmlFor="lastName" className={style.label}>
              Apellido:
            </label>
            <input
              className={style.input}
              id="lastName"
              name="lastName"
              type="text"
              value={changeString(dataPerson.lastName)}
              placeholder={
                isUpdate ? (person.lastName ? person.lastName : "") : ""
              }
              onChange={(e) => handleInputChange(e)}
            />
            {errors.lastName && (
              <span className={style.error}>{errors.lastName}</span>
            )}
          </div>

          <div className={style.formGroup}>
            <label htmlFor="age" className={style.label}>
              Edad:
            </label>
            <input
              className={style.input}
              id="age"
              name="age"
              type="number"
              value={dataPerson.age}
              placeholder={isUpdate ? (person.age ? person.age : "") : ""}
              onChange={(e) => handleInputChange(e)}
            />
            {errors.age && <span className={style.error}>{errors.age}</span>}
          </div>

          <div className={style.formGroup}>
            <label htmlFor="address" className={style.label}>
              Dirección:
            </label>
            <input
              className={style.input}
              id="address"
              name="address"
              type="text"
              value={dataPerson.address}
              placeholder={
                isUpdate ? (person.address ? person.address : "") : ""
              }
              onChange={(e) => handleInputChange(e)}
            />
            {errors.address && (
              <span className={style.error}>{errors.address}</span>
            )}
          </div>

          <div className={style.formGroup}>
            <label htmlFor="phone" className={style.label}>
              Teléfono:
            </label>
            <input
              className={style.input}
              id="phone"
              name="phone"
              type="tel"
              value={dataPerson.phone}
              placeholder={isUpdate ? (person.phone ? person.phone : "") : ""}
              onChange={(e) => handleInputChange(e)}
            />
            {errors.phone && (
              <span className={style.error}>{errors.phone}</span>
            )}
          </div>

          <div className={style.buttonContainer}>
            {!isUpdate ? (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={createPerson}
              >
                Crear
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-warning"
                onClick={updatePerson}
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
  );
}
