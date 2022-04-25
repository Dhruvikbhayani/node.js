const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/studentsapi", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connections is Sucessfully")
    })
    .catch((err) => {
        console.log("connections faile")
    })