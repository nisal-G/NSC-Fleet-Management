import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

let app = express();
app.use(bodyParser.json());

let mongoUrl = "mongodb+srv://NSC:NSCcarrentals123@cluster0.gxsoc.mongodb.net/NSC?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl);

let connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});



app.get("/", (req, res) => {
    console.log("Hello World");
    res.json({message: "Helllow World" + req.body.message});
})



app.listen(3000,() => {
    console.log('Server is running on port 3000');
})