import mongoose from "mongoose";

export const connectDB=async()=>{
    await  mongoose.connect(process.env.DB_CONNECTION)
     .then(()=>console.log("Database connected successfully"))
     .catch(()=>console.log("error occured while connecting the database")); 
}