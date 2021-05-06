const express = require("express")
const morgan = require('morgan');

app = express()

app.get("/", (req, res) => {
    res.send("test yes")
})

app.listen("5000", () => {
    console.log("server started")
})