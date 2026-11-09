import { ZodSchema } from "zod";
import { NextFunction, Request, Response } from "express"


export const teacherValidate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next()
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Bad Request Please Check Your Data"
        })
    }
}