import { Request, Response } from "express"
import Teachers from "../Models/TeacherModel"
export const getTeachersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const teachersData = await Teachers.find();
        res.status(200).json({
            success: true,
            data: teachersData
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server"
        })
    }
}
