const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoModle = require("./Models/Todo")


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todoDB");

// Home Page
app.get("/get", (req, res) => {

    todoModle.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

// create the post
app.post("/add", (req, res) => {
    const task = req.body.task;

    todoModle.create({
        task: task
    })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

// for Updating the post
app.put("/update/:id", (req ,res)=>{
    const {id} = req.params;

    todoModle.findByIdAndUpdate({_id:  id}, { done : true })
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

// for deleting the task
app.delete("/delete/:id", (req, res)=>{
    const {id} = req.params;

    todoModle.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

app.listen(port, () => {
    console.log(`Server is Running ${port}`);
})
