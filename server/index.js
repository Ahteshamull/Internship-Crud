const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const DbConnected = async () => {
    try {
        mongoose.connect(process.env.db).then(() => {
            console.log("Database connected")
        })
    } catch (error) {
        console.log(error)
    }
}
DbConnected();
const cors = require("cors");
const port = process.env.port || 5000;
app.listen(port, () => {
    console.log("Server is running on port", port);
})