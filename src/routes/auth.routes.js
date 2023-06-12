//Rutas relacionada con autenticacion
import { Router } from "express";

//importamos funciones de auth.controller.js
import { login, register } from "../controllers/aut.controller.js";

//Se crea el enrutador
const router = Router();

router.post("/register", (req, res) => {});

router.post("/login", (req, res) => {});

export default router;
