const validate = (rating) => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear)
  let errors = {};
  if (rating.academicYear > currentYear) {
    errors.academicYear =
      "A year in excess of the current year is not allowed.";
  }
  if (rating.academicYear < currentYear - 10) {
    errors.academicYear =
      "The academic year must be at least 10 years in the past.";
  }
  if (rating.rating > 5) {
    errors.rating = "A rating higher than 5 is not allowed.";
  }
  if (rating.rating < 0) {
    errors.rating = "No rating less than 0 is allowed.";
  }
  return errors;
};

export default validate;
