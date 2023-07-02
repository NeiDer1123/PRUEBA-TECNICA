const validateForm = (values) => {
    const errors = {};

    if (!values.identification) {
      errors.identification = "El campo de identificación no puede estar vacío";
    }

    if (!values.name) {
      errors.name = "El campo de nombre no puede estar vacío";
    } else if (values.name.length < 2) {
      errors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!values.lastName) {
      errors.lastName = "El campo de apellido no puede estar vacío";
    } else if (values.lastName.length < 2) {
      errors.lastName = "El apellido debe tener al menos 2 caracteres";
    }

    if (!values.age) {
      errors.age = "El campo de edad no puede estar vacío";
    }

    if (!values.address) {
      errors.address = "El campo de dirección no puede estar vacío";
    }

    if (!values.phone) {
      errors.phone = "El campo de teléfono no puede estar vacío";
    } else if (!/^\d+$/.test(values.phone)) {
      errors.phone = "El teléfono solo puede contener números";
    }

    if (!values.subject) {
      errors.subject = "El campo de materia no puede estar vacío";
    }

    return errors;
  };

  export default validateForm