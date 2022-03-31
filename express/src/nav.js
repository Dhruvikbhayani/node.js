// www.dhruvik.com - welcome to my home page 
// /about - welcome to my about page 
// /contact  - welcome to my contact page 
// /temp - welcome to my temp  page

const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("welcome to my home page")
})

app.get("/about", (req, res) => {
    res.status(200).send("<h1>welcome to my about page</h1>")
})
app.get("/about", (req, res) => {
    res.status(200).send("welcome to my about page")
})
app.get("/contact", (req, res) => {
    res.status(200).send("welcome to my contact page")
})
app.get("/temp", (req, res) => {
    res.status(200).json({ "message": "welcome to my temp page" })
})

app.listen(5052, () => {
    console.log("server is running ")
});