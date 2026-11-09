import { ZodSchema, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const createMiddleware = (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            const validateData = schema.parse(req.body);
            req.body = validateData
            next()
        } catch (error) {
            if (error instanceof ZodError) {
                console.log(error)
                res.status(400).json({
                    success: false,
                    message: "please check your data",
                    error: error.flatten().fieldErrors
                })
            }
        }
    }