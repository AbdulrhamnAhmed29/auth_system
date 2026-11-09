import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        subject: { type: String, required: true },
        salary: { type: Number, required: true }
    }
)
const Teachers = mongoose.model("teachers", TeacherSchema)
export default Teachers 