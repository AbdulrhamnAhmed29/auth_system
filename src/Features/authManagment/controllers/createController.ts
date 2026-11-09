import { Request, Response } from "express";
import { User } from "../models/users";
import { userSchema } from "../validators/userSchema";

export const createController = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
       
        const { name, email, password, role } = req.body;

    const user = new User({
        name,
        email,
        password,
        role
    });

    await user.save();

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user
    });

} catch (error) {
    console.error("Create User Error:", error);

    res.status(500).json({
        success: false,
        message: error instanceof Error
            ? error.message
            : "Internal server error"
    });
}
};