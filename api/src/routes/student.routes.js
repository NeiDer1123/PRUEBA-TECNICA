const { Router } = require("express");
const {
  getAllStudent,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
  getStudentRatings
} = require("../handlers/student.handler");

const studentRouter = Router();

studentRouter.get("/", getAllStudent);

studentRouter.get("/:id/ratings", getStudentRatings);

studentRouter.get("/:id", getStudentById);

studentRouter.post("/", createStudent);

studentRouter.delete("/:id", deleteStudent);

studentRouter.put("/:id", updateStudent);


module.exports = studentRouter;
