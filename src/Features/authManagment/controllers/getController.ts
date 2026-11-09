import { Request, Response } from "express"
import { User } from "../models/users"
export const getController = async (req: Request, res: Response): Promise<void> => {
    try {
        const usersData = await User.find();
        res.status(200).json({
            success: true,
            message: "the request has been successed",
            data: usersData,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "interval server"
        })
    }
}