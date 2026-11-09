import mongoose from "mongoose";


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("db is connect");

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
export default connectDb 