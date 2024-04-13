import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
  console.log("Database connected successfully");
  app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
  });
});

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  year: Number,
});

const userModel = mongoose.model("books", bookSchema);

// get 

app.get("/books", async (req, res) => {
  const bookData = await userModel.find();
  res.json(bookData);
}); 

// delete 

app.delete("/deleteBook/:id", async(req,res)=>{
    try {
        const result = await userModel.findByIdAndDelete(req.params.id);
        if(!result) return res.status(404).send('There is no book with that ID');
        res.send('Book deleted successfully');
    } catch(error) {
        res.status(500).send(error.message);
    }
});


// update  

app.put("/updateBook/:id",async (req,res) => {
    try{
        const updateData =req.body;
        const result = await userModel.findByIdAndUpdate(req.params.id, updateData, {new:true});
        if(!result) return res.status(404).send('No book with that ID');
        res.json(result);
    } catch(error){
        res.status(500).send(error.message);
    }
})
