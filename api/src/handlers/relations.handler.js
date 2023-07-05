const { Student, Rating, Subject, Professor } = require("../db");

const getRatingSubjectProfessorAndStudent = async (req, res) => {
  try {
    const raitings = await Rating.findAll({
      include: [
        {
          model: Subject,
          attributes: ["id", "name"],
          include: [
            {
              model: Professor,
              attributes: ["identification","name", "lastName"],
            },
          ],
        },
        {
          model: Student,
          attributes: ["identification","name", "lastName"],
        }
      ],
    });

    if (!raitings) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    res.json(raitings);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message });
  }
};

module.exports = {
  getRatingSubjectProfessorAndStudent,
};
