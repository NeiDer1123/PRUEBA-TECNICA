const { Router } = require("express");

const studentRouter = Router();

studentRouter.get("/", (req, res) => {
  res.send("Rertornando la lista de estudiante");
});

studentRouter.get("/:id", (req, res) => {
  res.send("Rertornando un solo estudiante");
});

studentRouter.post("/", (req, res) => {
  res.send("Creando un estudiante");
});

studentRouter.delete("/", (req, res) => {
  res.send("Eliminar un estudiante");
});

studentRouter.put("/", (req, res) => {
  res.send("Actualizando un estudiante");
});

module.exports = studentRouter;
