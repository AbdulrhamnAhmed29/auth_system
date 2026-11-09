import { Request, Response } from "express"
import { User } from "../models/users";

export const updateController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const { name, email, password, role } = req.body
        const userUpdate = await User.findByIdAndUpdate(id, { name, email, password, role }, { new: true })
        res.status(201).json({
            success: true,
            message: "the user has been updated",
            data: userUpdate
        })

    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: "failed update",
            error: error.message
        })
    }
}