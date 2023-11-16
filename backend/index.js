const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();

const app = express();
app.use = (express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`the server is running on port:${PORT}`)
})
mongoose.connect(
    process.env.CONNECT_SRING,

    (err) => {
        if (err) throw err;
        console.log("MONGODB CONNECT")
    }
);

app.use("/users", require("./routes/user"));
app.use("/todos", require("./routes/todo"));


