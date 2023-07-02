import { Formik, Form, Field, ErrorMessage } from "formik";
import validateForm from "./validate";
import style from "./FormPerson.module.css";

export default function FormPerson() {
  const handleSubmit = (values) => {
    console.log(values);
    alert("usuario creado");
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
