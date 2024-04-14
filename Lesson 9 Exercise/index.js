import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// create express app

const app = express();

// load enviroments from .env file

dotenv.config();

// set port

const PORT = process.env.PORT || 7000;

// get the mongodb connection url from enviroment variables
const MONGOURL = process.env.MONGO_URL;

// start the server

mongoose.connect(MONGOURL).then(() => {
  console.log("Database connected Successfully");
  app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
  });
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const userModel = mongoose.model("users", userSchema);

app.get("/getUsers", async (req, res) => {
  const userData = await userModel.find();
  res.json(userData);
});
