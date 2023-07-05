const validateForm = (dataPerson) => {
  const errors = {};

  if (!dataPerson.identification) {
    errors.identification = "El campo de identificación no puede estar vacío";
  } else if (dataPerson.identification.length !== 10) {
    errors.identification = "El número de identificación debe tener exactamente 10 dígitos";
  }

  if (!dataPerson.name) {
    errors.name = "El campo de nombre no puede estar vacío";
  } else if (dataPerson.name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  }  else if (/\d/.test(dataPerson.name)) {
    errors.name = "El nombre no puede contener números";
  }

  if (!dataPerson.lastName) {
    errors.lastName = "El campo de apellido no puede estar vacío";
  } else if (dataPerson.lastName.length < 2) {
    errors.lastName = "El apellido debe tener al menos 2 caracteres";
  } else if (/\d/.test(dataPerson.lastName)) {
    errors.lastName = "El apellido no puede contener números";
  }

  if (!dataPerson.age) {
    errors.age = "El campo de edad no puede estar vacío";
  } else if(dataPerson.age.length > 2){
    errors.age = "Debe ser una edad acorde"
  }

  if (!dataPerson.address) {
    errors.address = "El campo de dirección no puede estar vacío";
  }

  if (!dataPerson.phone) {
    errors.phone = "El campo de teléfono no puede estar vacío";
  } else if (!/^\d+$/.test(dataPerson.phone)) {
    errors.phone = "El número de teléfono solo puede contener números";
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

// Valido el objeto de Errores:
const verifyError = (errors) => {
  for (let key in errors) {
    if (errors[key] !== undefined) {
      return true;
    }
  }
  return false;
};

export { validateForm, verifyData, verifyError };
