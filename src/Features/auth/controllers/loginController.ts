
import { Request, Response } from "express"
import { User } from "../../authManagment/models/users"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
export const loginController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: "email and password are required",
            });
            return;
        }
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
            return;
        }
        const isPassordValid = await bcrypt.compare(password, user.password);
        if (!isPassordValid) {
            res.status(401).json({
                success: false,
                message: "Invalid  email or password",
            });
            return;
        }
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }
        const token = jwt.sign(
            { sub: user._id.toString() ,role:user.role },
            jwtSecret,
            { expiresIn: "1h" },
        )


        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            },

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: (error as Error).message,
        })
    }
}