const { Subject } = require("../db")

const getAllSubject = async (req, res) => {
  try {
    // Obtener todas las materias de la base de datos
    const subjects = await Subject.findAll();

    // Devolver la lista de materias
    res.status(200).json(subjects);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al obtener la lista de materias" });
  }
};

const getSubjectById = async (req, res) => {
  try {
    // Obtener el ID de la materia de los parámetros de la URL
    const { id } = req.params;

    // Buscar la materia por su ID en la base de datos
    const subject = await Subject.findByPk(id);

    // Verificar si la materia existe
    if (!subject) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }

    // Devolver la materia encontrada
    res.status(200).json(subject);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al obtener la materia" });
  }
};

const createSubject = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { name, professorId  } = req.body;

    // Crear una nueva materia en la base de datos
    const subject = await Subject.create({ name, professorId });

    // Devolver la materia creada
    res.status(201).json(subject);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al crear la materia" });
  }
};

const deleteSubject = async (req, res) => {
  try {
    // Obtener el ID de la materia de los parámetros de la URL
    const { id } = req.params;

    // Eliminar la materia de la base de datos
    const deletedSubject = await Subject.destroy({
      where: { id },
    });

    // Verificar si se eliminó alguna materia
    if (deletedSubject === 0) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }

    // Devolver el mensaje de éxito
    res.status(200).json({ message: "Materia eliminada correctamente" });
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al eliminar la materia" });
  }
};

const updateSubject = async (req, res) => {
  try {
    // Obtener el ID de la materia de los parámetros de la URL
    const { id } = req.params;

    // Obtener los nuevos datos del cuerpo de la solicitud
    const { name } = req.body;

    // Verificar si la materia existe
    const existingSubject = await Subject.findByPk(id);
    if (!existingSubject) {
      return res.status(404).json({ message: "Materia no encontrada" });
    }

    // Actualizar la materia en la base de datos
    await Subject.update(
      {
        name,
      },
      { where: { id } }
    );

    // Devolver el mensaje de éxito
    res.status(200).json({ message: "Materia actualizada correctamente" });
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al actualizar la materia" });
  }
};

module.exports = {
  getAllSubject,
  getSubjectById,
  createSubject,
  deleteSubject,
  updateSubject,
};
