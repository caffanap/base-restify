import { Router } from "restify-router";
import AuthController from "../controller/AuthController.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";

const router = new Router()

router.group('/api', (router) => {
    router.group('/auth', AuthMiddleware, (router) => {
        router.post('/login', AuthController.loginRegister)
    })
})

export default router