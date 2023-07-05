import validateForm from "./validate";
import style from "../Form.module.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../../../redux/actions";
import { useEffect, useState } from "react";
import { changeString } from "../../../helpers/funtions";

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
      return alert("A subject with this name already exists.");

    if (errors.name || !dataSubject.name)
      return alert("There are errors or empty data.")

    if(!isUpdate){
      await axios.post("http://localhost:3001/subject", dataSubject);
      dispatch(getSubjects());
      setDataSubject({ name: "" });
      return alert("Subject created")
    } else {
      await axios.put(`http://localhost:3001/subject/${idSubject}`, dataSubject);
      dispatch(getSubjects());
      setDataSubject({ name: "" });
      return alert("Subject updated")
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className={style.formGroup}>
              <label htmlFor="name" className={style.label}>
                Name:
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
                  Create
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={createOrUpdateSubject}
                >
                  Update
                </button>
              )}
              <button className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}