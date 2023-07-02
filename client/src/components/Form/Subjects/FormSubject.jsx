import { Formik, Form, Field, ErrorMessage } from "formik";
import validateForm from "./validate";
import style from "../Form.module.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function FormSubject({ show, handleClose }) {
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("http://localhost:3001/subject", values);
    alert("curso creado");
    resetForm();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={handleSubmit}
            validate={validateForm}
          >
            {({ errors }) => (
              <Form>
                <div className={style.formGroup}>
                  <label htmlFor="name" className={style.label}>
                    Nombre:
                  </label>
                  <Field className={style.input} name="name" type="text" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={style.error}
                  />
                </div>

                <div className={style.buttonContainer}>
                  <button type="submit" className={style.submitButton}>
                    Crear
                  </button>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
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
