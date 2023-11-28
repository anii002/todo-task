const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`the server is running on port:${PORT}`)
})

mongoose.connect(
    process.env.CONNECT_STRING ,
).then(() => {
    console.log("mongodb connected")
}).catch(error => {
    console.log("error in mongodb", error)
})

app.use("/users", require("./routes/user"));
app.use("/todos", require("./routes/todo"));
