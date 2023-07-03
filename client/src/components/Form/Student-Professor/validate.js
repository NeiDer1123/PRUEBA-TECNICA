const validateForm = (dataPerson) => {
    const errors = {};

    if (!dataPerson.identification) {
      errors.identification = "El campo de identificación no puede estar vacío";
    }

    if (!dataPerson.name) {
      errors.name = "El campo de nombre no puede estar vacío";
    } else if (dataPerson.name.length < 2) {
      errors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!dataPerson.lastName) {
      errors.lastName = "El campo de apellido no puede estar vacío";
    } else if (dataPerson.lastName.length < 2) {
      errors.lastName = "El apellido debe tener al menos 2 caracteres";
    }

    if (!dataPerson.age) {
      errors.age = "El campo de edad no puede estar vacío";
    }

    if (!dataPerson.address) {
      errors.address = "El campo de dirección no puede estar vacío";
    }

    if (!dataPerson.phone) {
      errors.phone = "El campo de teléfono no puede estar vacío";
    } else if (!/^\d+$/.test(dataPerson.phone)) {
      errors.phone = "El teléfono solo puede contener números";
    }

    return errors;
  };

  export default validateForm