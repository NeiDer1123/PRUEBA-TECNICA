const { Student, Professor, Rating, Subject } = require("../db");

const getAllStudent = async (req, res) => {
  try {
    // Obtener todos los estudiantes de la base de datos
    const students = await Student.findAll();

    // Devolver la lista de estudiantes
    res.status(200).json(students);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al obtener la lista de estudiantes" });
  }
};

const getStudentById = async (req, res) => {
  try {
    // Obtener el ID del estudiante de los parámetros de la URL
    const { id } = req.params;

    // Buscar el estudiante por su ID en la base de datos
    const student = await Student.findByPk(id);

    // Verificar si el estudiante existe
    if (!student) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    // Devolver el estudiante encontrado
    res.status(200).json(student);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al obtener el estudiante" });
  }
};

const createStudent = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { identification, name, lastName, age, address, phone } = req.body;

    // Validar si hay un profesor con la misma identificacion
    const professor = await Professor.findByPk(identification);

    if (professor)
      throw new Error("Ya existe un Profesor con esa identificacion");

    // Crear un nuevo estudiante en la base de datos
    const student = await Student.create({
      identification,
      name,
      lastName,
      age,
      address,
      phone,
    });

    // Devolver el estudiante creado
    res.status(201).json(student);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    // Obtener el ID del estudiante de los parámetros de la URL
    const { id } = req.params;

    // Eliminar el estudiante de la base de datos
    const deletedStudent = await Student.destroy({
      where: { identification: id },
    });

    // Verificar si se eliminó algún estudiante
    if (deletedStudent === 0) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    // Devolver el mensaje de éxito
    res.status(200).json({ message: "Estudiante eliminado correctamente" });
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al eliminar el estudiante" });
  }
};

const updateStudent = async (req, res) => {
  try {
    // Obtener el ID del estudiante de los parámetros de la URL
    const { id } = req.params;

    // Obtener los nuevos datos del cuerpo de la solicitud
    const { identification, name, lastName, age, address, phone } = req.body;

    // Verificar si el estudiante existe
    const existingStudent = await Student.findByPk(id);
    if (!existingStudent) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    // Actualizar el estudiante en la base de datos
    await Student.update(
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
    res.status(200).json({ message: "Estudiante actualizado correctamente" });
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener las calificaciones de un estudiante por su ID
// Controlador para obtener las calificaciones de un estudiante por su ID
const getStudentRatings = async (req, res) => {
  const studentId = req.params.id;

  try {

    // Obtener las calificaciones del estudiante con la asignatura correspondiente
    const ratings = await Rating.findAll({
      where: { studentId },
      attributes: ["academicYear", "rating"],
      include: {
        model: Subject,
        attributes: ["name"],
      },
    });

    if (!ratings) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    res.json({ ratings });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al obtener las calificaciones del estudiante" });
  }
};

module.exports = {
  getAllStudent,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
  getStudentRatings,
};
