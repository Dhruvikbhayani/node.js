// api
// get - read
// put - update
// post - create
// delete - delete

const express = require('express')
const app = express()
const path = require('path')
    // console.log(__dirname)

const static = path.join(__dirname, "../public")

// to set the view engine 
app.set("view engine", 'hbs')

//builtin middleware
// app.use(express.static(static));

//template engine route
app.get("/", (req, res) => {
    res.render('index')
})
app.get("/", (req, res) => {
    res.send("Hello from express")
})

// app.get("/home", (req, res) => {
//     res.send("Hello from home page ")
// })

app.listen(5051, () => {
    console.log("Server is run")
})