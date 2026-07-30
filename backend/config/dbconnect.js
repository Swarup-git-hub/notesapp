import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,);
        console.log('Connected to MongoDB ✅');
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);    } catch (error) {
        console.error('Error connecting to MongoDB ❌:', error);
        console.error(error.message);
        process.exit(1); // Exit the process with an error code
    }
};

// module.exports = connectDB;
export default connectDB;


// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI);

//         console.log("==================================");
//         console.log("✅ MongoDB Atlas Connected");
//         console.log(`Host : ${conn.connection.host}`);
//         console.log(`Database : ${conn.connection.name}`);
//         console.log("==================================");
//     } catch (error) {
//         console.error("==================================");
//         console.error("❌ Database Connection Failed");
//         console.error(error.message);
//         console.error("==================================");
//         process.exit(1);
//     }
// };

// export default connectDB;