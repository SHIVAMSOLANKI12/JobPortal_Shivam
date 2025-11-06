import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URl);
        console.log('MONGODB CONNECTED SUCCESSFULLY');
    } catch(error){
        console.log(error);
    }
}

export default connectDB;