const { Router } = require("express");
const professorRouter = require("./professor.routes")
const studentRouter = require("./student.routes")
const subjectRouter = require("./subject.routes")
const ratingRouter = require("./rating.routes")

const mainRouter = Router()

mainRouter.use("/professor", professorRouter)
mainRouter.use("/student", studentRouter)
mainRouter.use("/subject", subjectRouter)
mainRouter.use("/rating", ratingRouter)

module.exports = mainRouter