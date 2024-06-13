import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import AuthRouter from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Connected to Mongo");
}).catch((err)=>{
console.log(err);
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});

app.use("/api/user",userRouter);
app.use("/api/auth",AuthRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });