const express = require("express")
const morgan = require("morgan")

const professorRoutes = require("./routes/professor.routes")
const studentRoutes = require("./routes/studen.routes")
const subjectRoutes = require("./routes/subject.routes")

const app = express()

app.use(morgan("dev"))

app.use(professorRoutes)
app.use(studentRoutes)
app.use(subjectRoutes)

app.listen(3000)
console.log("server on port 3000")