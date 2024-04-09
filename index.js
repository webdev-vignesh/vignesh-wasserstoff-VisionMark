import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToDb from "./db/index.js";
import authRoutes from "./routes/authRoute.js";

const app = express();
const PORT = 5000;

// DB connection
connectToDb();

// middlewares
app.use(cors());
app.use(bodyParser.json());


// api routes

// user management
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})