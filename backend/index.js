// import express from 'express';
// import cors from 'cors';
// import connectDB from './config/DBconnect.js';
// // import dotenv from 'dotenv';
// import 'dotenv/config';
// // dotenv.config();

// //initialize express app
// const app = express();
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server running on https://localhost:${process.env.PORT}`);
// });

// //DataBase connection
// await connectDB();

// //routes
// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// app.post('/posting', (req, res) => {
//     console.log("post hw");
//     res.send('posting Hello World!');
// })

// app.put('/updating', (req, res) => {
//     console.log("put hw");
//     res.send('updating Hello World!');
// })

// app.delete('/deleting', (req, res) => {
//     console.log("delete hw");
//     res.send('deleting Hello World!');
// })

// //middleware
// app.use(cors(
//     // {
//     //     origin: 'http://localhost:5173',
//     //     methods: ['GET', 'POST', 'PUT', 'DELETE']
//     // }
// ));
// app.use(express.json());


// import express from "express";
// import cors from "cors";
// import "dotenv/config";

// import connectDB from "./config/dbconnect.js";

// import authRoutes from "./routes/authRoutes.js";

// const app = express();

// app.use(cors());

// app.use(express.json());

// const PORT =
//   process.env.PORT || 5000;
  
// app.listen(PORT, () => {
//   console.log(
//     `🚀 Server running on port ${PORT}`
//   );
// }
// );

// await connectDB();

// app.use(
//   "/api/auth",
//   authRoutes
// );

// app.get("/", (req, res) => {
//   res.send("API Running...");
// });

import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/dbconnect.js";

import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
await connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Default Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Notes App API is Running..... 🚀",
    });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});