const validateForm = (dataSubject) => {
  const errors = {};
  if (!dataSubject.name) {
    errors.name = "El campo de nombre no puede estar vacío";
  } else if (dataSubject.name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  } else if (!/[a-zA-Z]/.test(dataSubject.name)) {
    errors.name = "El nombre debe contener al menos una letra";
  }

  return errors;
};

export default validateForm;
