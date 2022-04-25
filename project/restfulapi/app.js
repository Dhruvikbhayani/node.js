const express = require('express')
const app = express()

app.post("/students", (req, res) => {
    res.send('Hello')
})

app.listen(5050, () => {
    console.log("server is run 5050")
})