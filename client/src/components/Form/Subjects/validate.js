const validateForm = (dataSubject) => {
  const errors = {};
  if (!dataSubject.name) {
    errors.name = "The name field cannot be empty";
  } else if (dataSubject.name.length < 2) {
    errors.name = "The name must have at least 2 characters";
  }

  return errors;
};

export default validateForm;
