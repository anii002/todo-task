const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    userId: { type: string, required: true },
    title: { type: string, required: true },
    description: { type: string, required: true },


}, { timestamps: true })
module.exports = Todos = mongoose.model("todos", todoSchema)