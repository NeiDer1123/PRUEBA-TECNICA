const { Router } = require("express")

const router = Router()

router.get("/professor", (req, res)=>{
    res.send("Rertornando la lista de profesores")
})

router.get("/professor/:id", (req, res)=>{
    res.send("Rertornando un solo profesor")
})

router.post("/professor", (req, res)=>{
    res.send("Creando un profesor")
})

router.delete("/professor", (req, res)=>{
    res.send("Eliminar un profesor")
})

router.put("/professor", (req, res)=>{
    res.send("Actualizando un profesor")
})

module.exports = router