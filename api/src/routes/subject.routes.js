const { Router } = require("express");
const {
  getAllSubject,
  getSubjectById,
  createSubject,
  deleteSubject,
  updateSubject,
} = require("../handlers/subject.handler");

const subjectRouter = Router();

subjectRouter.get("/", getAllSubject);

subjectRouter.get("/:id", getSubjectById);

subjectRouter.post("/", createSubject);

subjectRouter.delete("/:id", deleteSubject);

subjectRouter.put("/:id", updateSubject);

module.exports = subjectRouter;
