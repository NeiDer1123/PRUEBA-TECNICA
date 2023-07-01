const { Student, Rating, Subject, Professor } = require("../db");

const getStudentRatingSubjectAndProfessor = async (req, res) => {
  try {
    const { studentId } = req.params;

    const student = await Student.findByPk(studentId, {
      include: [
        {
          model: Rating,
          attributes: ["academicYear", "rating"],
          include: [
            {
              model: Subject,
              attributes: ["name"],
              include: {
                model: Professor,
                attributes: ["name", "lastName"],
              },
            },
          ],
        },
      ],
    });

    if (!student) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    res.json(student);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener la información del estudiante" });
  }
};

module.exports = {
  getStudentRatingSubjectAndProfessor,
};
