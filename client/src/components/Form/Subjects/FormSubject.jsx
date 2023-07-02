import { Formik, Form, Field, ErrorMessage } from "formik";
import validateForm from "./validate";
import style from "../Form.module.css";
import axios from "axios";

export default function FormSubject() {
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("http://localhost:3001/subject", values);
    alert("curso creado");
    resetForm();
  };

  return (
    <div>
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

            <button type="submit" className={style.submitButton}>
              Crear
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
