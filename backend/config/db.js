import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://thuytrang_jj:duy11092001@cluster0.hdzer.mongodb.net/food-del').then(()=>console.log("DB connected"));
}