const express = require('express')
const app = express()
const mongoose = require('./db/cons')
const port = process.env.Port || 2525

app.use(express.json())

//create student
app.post("/students", (req, res) => {
    res.send('heloo')
})
app.listen(port, () => {
    console.log(`server is run ${port}`)
})