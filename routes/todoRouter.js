import { Router } from "express"
import { todoController } from "../controllers/index.js"

const router = Router()

router.post('/create', todoController.create)

export default router