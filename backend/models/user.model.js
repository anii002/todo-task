const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    fathername: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: Number, required: true },
    password: { type: String, required: true, minlength: 5 }
});

module.exports = User = mongoose.model("user", userSchema);