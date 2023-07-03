import validateForm from "./validate";
import style from "../Form.module.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { getSubjects } from "../../../redux/actions";
import { useEffect, useState } from "react";

export default function FormSubject({ show, handleClose, isUpdate, idSubject }) {
  const dispatch = useDispatch();
  const [dataSubject, setDataSubject] = useState({ name: "" });
  const [errors, setErrors] = useState({ name: "" });

  useEffect(()=>{
    // Cuando sea "true" muestro los valores con los que se creo:
    isUpdate && setDataSubject({ name: "matematicas" })

    // Al desmontar se setea en su valor predeterminado:
    return () => {
      setDataSubject({name: ""});
    };
  }, [isUpdate])

  // Conecto mi estado con los valores del Input:
  const handleInputChange = (e) => {
    setDataSubject({
      ...dataSubject,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...dataSubject,
        [e.target.name]: e.target.value,
      })
    );
  };

  const createSubject = async (e) => {
    e.preventDefault();
    if(errors.name || !dataSubject.name ) return
    await axios.post("http://localhost:3001/subject", dataSubject);
    dispatch(getSubjects());
    setDataSubject({ name: "" });
  };

  const updateSubject = async (e) => {
    e.preventDefault();
    if(errors.name) return
    await axios.put(`http://localhost:3001/subject/${idSubject}`, dataSubject);
    dispatch(getSubjects());
    setDataSubject({ name: "" });
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
                Nombre:
              </label>
              <input
                className={style.input}
                name="name"
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={dataSubject.name}
              />
            </div>
            {errors.name && (
              <span className={style.error}>{errors.name}</span>
            )}
            <div className={style.buttonContainer}>
              {!isUpdate ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={createSubject}
                >
                  Create
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={updateSubject}
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
        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
