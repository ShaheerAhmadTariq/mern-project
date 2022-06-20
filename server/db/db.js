// DB=mongodb+srv://shaheerahmad:xybFAupulKU4pN3d@sgm.kze22.mongodb.net/?retryWrites=true&w=majority

import mongoose from "mongoose"
const connectDB=async ()=>{
    try {
         mongoose.connect(process.env.DB,()=>{
            console.log("db connected")
         })
    } catch (error) {
        console.log(error)
    }
}
export default connectDB