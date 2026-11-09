import { Request, Response } from "express";
import Teachers from "../Models/TeacherModel"
import { success } from "zod";

export const createTeacherControllers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, subject, salary } = req.body;
        const newTeacher = new Teachers({ name, subject, salary })
        await newTeacher.save()
        res.status(201).json({
            success: true,
            message: "the teacher has been created",
            data: newTeacher
        })
    } catch (error) {
        res.status(400).json({
            success: false,
        })
    }
}

