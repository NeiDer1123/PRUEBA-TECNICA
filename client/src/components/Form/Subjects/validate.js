const validateForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "El campo de nombre no puede estar vacío";
  } else if (values.name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  }

  return errors;
};

export default validateForm;
