const { Router } = require("express");
const professorRouter = require("./professor.routes")
const studentRouter = require("./student.routes")
const subjectRouter = require("./subject.routes")

const mainRouter = Router()

mainRouter.use("/professor", professorRouter)
mainRouter.use("/student", studentRouter)
mainRouter.use("/subject", subjectRouter)

module.exports = mainRouter