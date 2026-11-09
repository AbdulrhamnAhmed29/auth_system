import { Request, Response } from "express";
import Teachers from "../Models/TeacherModel";
export const updateTeacherControllers = async (req: Request, res: Response): Promise<void> => {
    // 1- take id from param  
    const { id } = req.params;
    // 2- take data from body
    const { name, subject, salary } = req.body;
    // 3- import teacher
    // 4- update and save to database
    const updatedTeacher = await Teachers.findByIdAndUpdate(id, { name, subject, salary })
    // 5- send response to client(frontend)
    res.status(201).json({
        success: true,
        data: updatedTeacher,
    })
}