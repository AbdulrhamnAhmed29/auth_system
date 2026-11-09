import { Request, Response } from "express"
import { User } from "../models/users.js"
import { success } from "zod"

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "user has been deleted",        
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server"
        })
    }
}