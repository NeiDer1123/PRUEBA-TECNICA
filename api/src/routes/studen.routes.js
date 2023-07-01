const { Router } = require("express")

const router = Router()

router.get("/student", (req, res)=>{
    res.send("Rertornando la lista de estudiante")
})

router.get("/student/:id", (req, res)=>{
    res.send("Rertornando un solo estudiante")
})

router.post("/student", (req, res)=>{
    res.send("Creando un estudiante")
})

router.delete("/student", (req, res)=>{
    res.send("Eliminar un estudiante")
})

router.put("/student", (req, res)=>{
    res.send("Actualizando un estudiante")
})

module.exports = router