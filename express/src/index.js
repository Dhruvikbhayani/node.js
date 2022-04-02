// api
// get - read
// put - update
// post - create
// delete - delete

const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const static = path.join(__dirname, "../public")
const template = path.join(__dirname, "../templet/views")
const partialspath = path.join(__dirname, "../templet/partials")

// to set the view engine 
app.set("view engine", 'hbs')
app.set("views", template)
hbs.registerPartials(partialspath)

//builtin middleware
// app.use(express.static(static));

//template engine route
app.get("/", (req, res) => {
    res.render('index')
})

app.get("/about", (req, res) => {
    res.render('about')
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