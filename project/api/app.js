const express = require('express')
const app = express()
app.use(express.json())
const student = require('./models/stdent')
const mongoose = require('./db/cons')
const port = process.env.Port || 2525

app.use(express.json())

//create student
app.post("/students", (req, res) => {

    const user = new student(req.body)

    user.save().then((err, data) => {
            if (err) throw err
            else {
                res.status(201).send(data)
            }
        })
        // .catch((e) => {
        //     res.status(400).send(e)
        // })
})
app.listen(port, () => {
    console.log(`server is run ${port}`)
})