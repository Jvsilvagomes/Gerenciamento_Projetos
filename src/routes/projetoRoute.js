import { Router } from "express";
import * as projetoController from './../controllers/projetoController.js'

const router = Router();

router.get("/", projetoController.listarTodos);

export default router;