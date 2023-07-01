const { Router } = require("express");

const professorRouter = Router();

professorRouter.get("/", (req, res) => {
  res.send("Rertornando la lista de profesores");
});

professorRouter.get("/:id", (req, res) => {
  res.send("Rertornando un solo profesor");
});

professorRouter.post("/", (req, res) => {
  res.send("Creando un profesor");
});

professorRouter.delete("/", (req, res) => {
  res.send("Eliminar un profesor");
});

professorRouter.put("/", (req, res) => {
  res.send("Actualizando un profesor");
});

module.exports = professorRouter;
