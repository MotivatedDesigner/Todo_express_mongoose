import { Router } from "express"
import { todoController } from "../controllers/index.js"

const router = Router()

router.post('/',todoController.create)
router.get('/',todoController.get)

export default router