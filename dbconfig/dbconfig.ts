import { error } from "console";
import mongoose from "mongoose";

export async function connect () {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected' , () => {
            console.log("MONGODB Connected Successfully");
        })

        connection.on('error' , () => {
            console.log('MongoDB Connection Error. Please make sure MongoDB is running' + error);
            process.exit()
        })
        
    } catch (error) {
        console.log("Something went Wrong!");
        console.log(error);
        
        
    }
}