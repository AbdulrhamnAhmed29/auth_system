import { z } from "zod"

export const schemaOfTeacherData = z.object({
    name: z.string().min(1, "the name is required"),
    subject: z.string().min(1, "the subject is required"),
    salary: z.number().min(1, "the salary is required")
})