const { Router } = require("express");

const subjectRouter = Router();

subjectRouter.get("/", (req, res) => {
  res.send("Rertornando la lista de materia");
});

subjectRouter.get("/:id", (req, res) => {
  res.send("Rertornando un solo materia");
});

subjectRouter.post("/", (req, res) => {
  res.send("Creando un materia");
});

subjectRouter.delete("/", (req, res) => {
  res.send("Eliminar un materia");
});

subjectRouter.put("/", (req, res) => {
  res.send("Actualizando un materia");
});

module.exports = subjectRouter;
