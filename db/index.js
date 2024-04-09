import mongoose from "mongoose";
import dotnev from "dotenv";

dotnev.config();

const CONNECTION_STRING=process.env.CONNECTION_STRING;

async function connectToDb() {
    try {
        const connection = await mongoose.connect(CONNECTION_STRING);
        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDb;