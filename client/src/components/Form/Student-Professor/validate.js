const validateForm = (dataPerson) => {
  const errors = {};

  if (!dataPerson.identification) {
    errors.identification = "The identification field cannot be empty";
  }

  if (!dataPerson.name) {
    errors.name = "The name field cannot be empty";
  } else if (dataPerson.name.length < 2) {
    errors.name = "The name must be at least 2 characters long";
  }

  if (!dataPerson.lastName) {
    errors.lastName = "The last name field cannot be empty";
  } else if (dataPerson.lastName.length < 2) {
    errors.lastName = "The last name must be at least 2 characters long";
  }

  if (!dataPerson.age) {
    errors.age = "The age field cannot be empty";
  }

  if (!dataPerson.address) {
    errors.address = "The address field cannot be empty";
  }

  if (!dataPerson.phone) {
    errors.phone = "The phone field cannot be empty";
  } else if (!/^\d+$/.test(dataPerson.phone)) {
    errors.phone = "The phone number can only contain numbers";
  }

  return errors;
};

// Valido si hay algun campo vacio:
const verifyData = (dataPerson) => {
  for (let key in dataPerson) {
    if (dataPerson[key] === "") {
      return true;
    }
  }
  return false;
};

export { validateForm, verifyData };
