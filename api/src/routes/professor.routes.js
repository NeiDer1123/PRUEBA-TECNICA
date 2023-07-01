const { Router } = require("express");
const {
  getAllProfessor,
  getProfessorById,
  createProfessor,
  deleteProfessor,
  updateProfessor,
} = require("../handlers/professor.handler");

const professorRouter = Router();

professorRouter.get("/", getAllProfessor);

professorRouter.get("/:id", getProfessorById);

professorRouter.post("/", createProfessor);

professorRouter.delete("/:id", deleteProfessor);

professorRouter.put("/:id", updateProfessor);

module.exports = professorRouter;
