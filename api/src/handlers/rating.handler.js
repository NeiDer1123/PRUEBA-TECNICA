const { Rating } = require("../db")

const getAllRating = async (req, res) => {
  try {
    // Obtener todas las calificaciones de la base de datos
    const ratings = await Rating.findAll();

    // Devolver la lista de calificaciones
    res.status(200).json(ratings);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res
      .status(500)
      .json({ error: "Error al obtener la lista de calificaciones" });
  }
};

const getRatingById = async (req, res) => {
  try {
    // Obtener el ID de la calificación de los parámetros de la URL
    const { id } = req.params;

    // Buscar la calificación por su ID en la base de datos
    const rating = await Rating.findByPk(id);

    // Verificar si la calificación existe
    if (!rating) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }

    // Devolver la calificación encontrada
    res.status(200).json(rating);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al obtener la calificación" });
  }
};

const createRating = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { academicYear, rating, studentId, subjectId } = req.body;

    // Crear una nueva calificación en la base de datos
    const newRating = await Rating.create({ academicYear, rating, studentId, subjectId });

    // Devolver la calificación creada
    res.status(201).json(newRating);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: error.message });
  }
};

const deleteRating = async (req, res) => {
  try {
    // Obtener el ID de la calificación de los parámetros de la URL
    const { id } = req.params;

    // Eliminar la calificación de la base de datos
    const deletedRating = await Rating.destroy({
      where: { id },
    });

    // Verificar si se eliminó alguna calificación
    if (deletedRating === 0) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }

    // Devolver el mensaje de éxito
    res.status(200).json({ message: "Calificación eliminada correctamente" });
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: error.message });
  }
};

const updateRating = async (req, res) => {
  try {
    // Obtener el ID de la calificación de los parámetros de la URL
    const { id } = req.params;

    // Obtener los nuevos datos del cuerpo de la solicitud
    const { academicYear, rating } = req.body;

    // Verificar si la calificación existe
    const existingRating = await Rating.findByPk(id);
    if (!existingRating) {
      return res.status(404).json({ message: "Calificación no encontrada" });
    }

    // Actualizar la calificación en la base de datos
    await Rating.update(
      {
        academicYear,
        rating,
      },
      { where: { id } }
    );

    // Obtener la calificación actualizada
    const updatedRating = await Rating.findByPk(id);

    // Devolver la calificación actualizada
    res.status(200).json(updatedRating);
  } catch (error) {
    // Manejar el error en caso de que ocurra
    res.status(500).json({ error: "Error al actualizar la calificación" });
  }
};

module.exports = {
  getAllRating,
  getRatingById,
  createRating,
  deleteRating,
  updateRating,
};
