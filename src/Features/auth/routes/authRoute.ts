import Router from "express"
import { registerController } from "../controllers/registerController";
import { createMiddleware } from "../../authManagment/middlewares/createMiddleware";
import { userSchema } from "../../authManagment/validators/userSchema";
import { loginController } from "../controllers/loginController";
import { authMiddleware } from "../middlewares/authmiddleware";
import { authorize } from "../middlewares/authorize";

export const authRoute = Router();

// POST register => /api/auth/register 
authRoute.post("/register", createMiddleware(userSchema), registerController)
authRoute.post("/login", createMiddleware(userSchema), loginController);
authRoute.get("/test", authMiddleware, authorize("admin"), async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "the route has been protected and for admin",
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "the route hasnt protected and forbrddin",
        })
    }
})
