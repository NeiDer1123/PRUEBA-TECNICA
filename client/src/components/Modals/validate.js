const validate = (rating) => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  let errors = {};
  if (rating.academicYear > currentYear) {
    errors.academicYear = "No se permite un año superior al año actual.";
  }
  if (rating.academicYear < currentYear - 10) {
    errors.academicYear =
      "El año académico debe ser máximo de hace 10 años";
  }
  if (rating.rating > 5) {
    errors.rating = "No se permite una calificación mayor a 5.";
  }
  if (rating.rating < 0) {
    errors.rating = "No se permite una calificación menor a 0.";
  }
  return errors;
};

export default validate;
