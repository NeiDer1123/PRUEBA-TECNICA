const { Professor, Student } = require("../db");

const getAllProfessor = async (req, res) => {
  try {
    // Obtener todos los profesores de la base de datos
    const professors = await Professor.findAll();

    // Devolver la lista de profesores
    res.status(200).json(professors);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al obtener la lista de profesores" });
  }
};

const getProfessorById = async (req, res) => {
  try {
    // Obtener el ID del profesor de los parámetros de la URL
    const { id } = req.params;

    // Buscar el profesor por su ID en la base de datos
    const professor = await Professor.findByPk(id);

    // Verificar si el profesor existe
    if (!professor) {
      return res.status(404).json({ message: "Profesor no encontrado" });
    }

    // Devolver el profesor encontrado
    res.status(200).json(professor);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al obtener el profesor" });
  }
};

const createProfessor = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { identification, name, lastName, age, address, phone } = req.body;

    // Validar si hay un estudiante con la misma identificacion
    const student = await Student.findByPk(identification)

    if(student) throw new Error("Ya existe un Estudiante con esa identificacion");
    
    // Crear un nuevo profesor en la base de datos
    const professor = await Professor.create({
      identification,
      name,
      lastName,
      age,
      address,
      phone,
    });

    // Devolver el profesor creado
    res.status(201).json(professor);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: error.message });
  }
};

const deleteProfessor = async (req, res) => {
  try {
    // Obtener el ID del profesor de los parámetros de la URL
    const { id } = req.params;

    // Eliminar el profesor de la base de datos
    const deletedProfessor = await Professor.destroy({
      where: { identification: id },
    });

    // Verificar si se eliminó algún profesor
    if (deletedProfessor === 0) {
      return res.status(404).json({ message: "Profesor no encontrado" });
    }

    // Devolver el mensaje de éxito
    res.status(200).json({ message: "Profesor eliminado correctamente" });
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al eliminar el profesor" });
  }
};

const updateProfessor = async (req, res) => {
  try {
    // Obtener el ID del profesor de los parámetros de la URL
    const { id } = req.params;

    // Obtener los nuevos datos del cuerpo de la solicitud
    const { identification, name, lastName, age, address, phone } = req.body;

    // Verificar si el profesor existe
    const existingProfessor = await Professor.findByPk(id);
    if (!existingProfessor) {
      return res.status(404).json({ message: "Profesor no encontrado" });
    }

    // Actualizar el profesor en la base de datos
    await Professor.update(
      {
        identification,
        name,
        lastName,
        age,
        address,
        phone,
      },
      { where: { identification: id } }
    );

    // Devolver el mensaje de éxito
    res.status(200).json({ message: "Profesor actualizado correctamente" });
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al actualizar el profesor" });
  }
};

module.exports = {
  getAllProfessor,
  getProfessorById,
  createProfessor,
  deleteProfessor,
  updateProfessor,
};
