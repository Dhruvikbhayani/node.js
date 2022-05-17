const express = require('express')
const app = express()
app.use(express.json())
const student = require('./models/stdent')
const mongoose = require('./db/cons')
const async = require('hbs/lib/async')
const port = process.env.Port || 2525

app.use(express.json())

//create student
app.post("/students", (req, res) => {

    const user = new student(req.body)

    user.save().then(() => {
            res.send(user)
        })
        .catch((e) => {
            res.status(400).send(e)
        })
})

//find student
app.get("/get", async(req, res) => {
    try {

        await student.find().then(data => res.send(data))
    } catch (e) {
        res.send(e)
    }
})

//delete student
app.delete("/delete/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const deletedata = await student.findByIdAndDelete(id)
        if (!deletedata) {
            return res.status(404).send()
        } else {

            res.status(200).send(deletedata)
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

//update student
app.patch("/update/:id", async(req, res) => {
    try {
        const id = req.params.id
        const updatedata = await student.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(updatedata)


    } catch (e) {
        res.status(500).send(e)
    }
})




app.listen(port, () => {
    console.log(`server is run ${port}`)
})