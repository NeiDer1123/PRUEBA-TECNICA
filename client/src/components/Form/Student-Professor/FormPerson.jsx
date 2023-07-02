import { Formik, Form, Field, ErrorMessage } from "formik";
import validateForm from "./validate";
import style from "../Form.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { getStudets, getTeachers } from "../../../redux/actions";

export default function FormPerson({ show, handleClose }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    if (location.pathname === "/student") {
      await axios.post("http://localhost:3001/student", values);
      dispatch(getStudets())
    } else {
      await axios.post("http://localhost:3001/professor", values);
      dispatch(getTeachers())
    }
    resetForm();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            identification: "",
            name: "",
            lastName: "",
            age: "",
            address: "",
            phone: "",
            subject: "",
          }}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          {({ errors }) => (
            <Form className={style.form}>
              <div className={style.formGroup}>
                <label htmlFor="identification" className={style.label}>
                  Identificación:
                </label>
                <Field
                  className={style.input}
                  name="identification"
                  type="number"
                />
                <ErrorMessage
                  name="identification"
                  component="div"
                  className={style.error}
                />
              </div>

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

              <div className={style.formGroup}>
                <label htmlFor="lastName" className={style.label}>
                  Apellido:
                </label>
                <Field className={style.input} name="lastName" type="text" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className={style.error}
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="age" className={style.label}>
                  Edad:
                </label>
                <Field className={style.input} name="age" type="number" />
                <ErrorMessage
                  name="age"
                  component="div"
                  className={style.error}
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="address" className={style.label}>
                  Dirección:
                </label>
                <Field className={style.input} name="address" type="text" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className={style.error}
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="phone" className={style.label}>
                  Teléfono:
                </label>
                <Field className={style.input} name="phone" type="tel" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={style.error}
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="subject" className={style.label}>
                  Subject:
                </label>
                <Field className={style.input} name="subject" type="text" />
                <ErrorMessage
                  name="subject"
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
  );
}
