import { Router } from "express";
import { createMiddleware } from "./middlewares/createMiddleware";
import { userSchema } from "./validators/userSchema";
import { createController } from "./controllers/createController";
import { getController } from "./controllers/getController";
import { updateController } from "./controllers/updateController";
import { deleteUser } from "./controllers/deleteController";

export const userRouter = Router();
userRouter.post(
    "/",   // path
    createMiddleware(userSchema), // middleware
    createController, // controller
)
userRouter.get("/", getController)

userRouter.put("/:id", createMiddleware(userSchema), updateController)
userRouter.delete("/:id", deleteUser)