import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

interface JwtPayload extends Request {
    userId: string;
    role: string
}
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                success: false,
                message: "unauthorized"
            })
            return
        }
        // get token from authHeader 
        const token = authHeader?.split(" ")[1];
        const jwtSecret = process.env.JWT_SECRET

        const decoded = jwt.verify(token as string, jwtSecret as string)
        req.user = decoded as JwtPayload;
        next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
}