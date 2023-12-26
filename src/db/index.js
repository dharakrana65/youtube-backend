import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async() => {
    try {
        const connetctionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connecting to DB HOST : ${connetctionInstance.connection.host}.`);
    } catch (error) {
        console.log("MONGODB: Error connecting" , error);
        process.exit(1);
    }
}

export default connectDB;