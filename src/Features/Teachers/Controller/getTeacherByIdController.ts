import { Request, Response } from "express"
import Teachers from "../Models/TeacherModel"
export const getTeacherByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const teacher = await Teachers.findById(id);
        res.status(200).json({
            success: true,
            data: teacher
        })
    } catch (error) {
        res.status(500).json({
            success:false,
        })
    }
}