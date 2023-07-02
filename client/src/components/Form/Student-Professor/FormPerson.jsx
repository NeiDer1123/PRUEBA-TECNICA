import { Formik, Form, Field, ErrorMessage } from "formik";
import validateForm from "./validate";
import style from "./FormPerson.module.css";

export default function FormPerson() {

  const handleSubmit = (values) => {
    console.log(values);
    alert("usuario creado")
  };

  return (
    <div>
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
          <Form>
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

            <button
              type="submit"
              className={style.submitButton}
            >
              Crear
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
