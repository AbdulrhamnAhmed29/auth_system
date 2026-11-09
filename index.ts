const expres = require("express");
import connectDb from "./src/config/db";
import dotenv from "dotenv";
import { userRouter } from "./src/Features/authManagment/routes";
import { authRoute } from "./src/Features/auth/routes/authRoute";
const app = expres()
const port: number = 3000
// environment variables
dotenv.config();

// to read json files 
app.use(expres.json());

// user routes 
app.use("/api/user", userRouter)
// auth routes 
app.use("/api/auth", authRoute)

// conect db 
connectDb()

// start server 
app.listen(port, () => {
    console.log(`the server is success in https//localhost:${port}`);
})