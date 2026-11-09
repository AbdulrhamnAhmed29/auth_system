import { Request, Response } from "express"
import { User } from "../../authManagment/models/users"
import bcrypt from "bcrypt"

export const registerController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password, role } = req.body;
        // check is not found email or password in body
        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: "email and password are required",
            });
            return;
        };
        // check is email already exist in database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
            return;
        }
        const hashedPassord = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hashedPassord, role });
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message,
        })
    }
};
