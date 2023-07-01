const { Router } = require("express")

const router = Router()

router.get("/subject", (req, res)=>{
    res.send("Rertornando la lista de materia")
})

router.get("/subject/:id", (req, res)=>{
    res.send("Rertornando un solo materia")
})

router.post("/subject", (req, res)=>{
    res.send("Creando un materia")
})

router.delete("/subject", (req, res)=>{
    res.send("Eliminar un materia")
})

router.put("/subject", (req, res)=>{
    res.send("Actualizando un materia")
})

module.exports = router