const mongoose = require("mongoose")

const todoScheme = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

const todoModle = mongoose.model("Todo", todoScheme)

module.exports = todoModle;