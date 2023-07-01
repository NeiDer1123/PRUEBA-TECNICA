const { Router } = require("express");
const { getStudentRatingSubjectAndProfessor } = require("../handlers/relations.handler")
const {
  getAllStudent,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
} = require("../handlers/student.handler");

const studentRouter = Router();

studentRouter.get("/", getAllStudent);

studentRouter.get("/:id", getStudentById);

studentRouter.post("/", createStudent);

studentRouter.delete("/:id", deleteStudent);

studentRouter.put("/:id", updateStudent);

studentRouter.get("/:studentId/report", getStudentRatingSubjectAndProfessor)

module.exports = studentRouter;
