import { Router } from "express";
import * as projetoController from './../controllers/projetoController.js'

const router = Router();

router.get("/", projetoController.listarTodos);
router.get("/:id", projetoController.listarUm);
router.post("/", projetoController.criar);


export default router;