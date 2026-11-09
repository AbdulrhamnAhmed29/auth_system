import { Router } from "express";
import {
    getTeachersController,
    getTeacherByIdController,
    createTeacherControllers,
    updateTeacherControllers,
    deleteTeacherControllers,
} from "../index"
import { teacherValidate } from "../Middlewares/teacherMiddleware";
import { schemaOfTeacherData } from "../Validators/dataValidators";
import { authorize } from "../../auth/middlewares/authorize";

export const teacher = Router()
// GET ALL TEACHERS 
teacher.get("/", getTeachersController ,authorize("admin"),)
// GET TEACHER BY ID
teacher.get("/:id", getTeacherByIdController)
// CREATE NEW TEACHER
teacher.post("/", teacherValidate(schemaOfTeacherData),authorize("admin"), createTeacherControllers)
// UPDATE TEACHER
teacher.put("/update/:id", teacherValidate(schemaOfTeacherData), updateTeacherControllers)
// DELETE TEACHERS 
teacher.delete("/delete/:id", deleteTeacherControllers)
