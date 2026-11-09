import { Request, Response } from "express"
import Teachers from "../Models/TeacherModel"
export const deleteTeacherControllers = async (req: Request, res: Response): Promise<void> => {
    try {
        // 1- take id from params 
        const { id } = req.params;
        // 2- delete from DB 
        await Teachers.findByIdAndDelete(id)
        // 3- send res for frontend
        res.status(200).json({
            success: true,
            message: "teacher has been deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
        })
    }
}