const { type } = require('express/lib/response')
const async = require('hbs/lib/async')
const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/mongooosedata", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("connections Successfull") }).catch((err) => { console.log(err) })

const playschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        require: true
    },
    list: {
        type: String,
        required: true
    }
})

//insert data 

const playlist = new mongoose.model("playlist", playschema)

// const data = new playlist({
//     name: "node js",
//     type: "backend",
//     list: "no"
// })
// data.save().then(() => {
//     console.log("document insert")
// })

const createdata = async() => {
        try {
            const data = new playlist({
                name: "js",
                type: "frontend",
                list: "no"
            })
            const data1 = new playlist({
                name: "mongodb",
                type: "database",
                list: "no"
            })
            const data2 = new playlist({
                name: "mongoose",
                type: "module",
                list: "no"
            })
            const data3 = new playlist({
                name: "express",
                type: "backend",
                list: "no"
            })
            const savedata = await playlist.insertMany([data, data1, data2, data3]);
            console.log(savedata)

        } catch (err) {
            console.log(err)
        }
    }
    // createdata()



//read data 

const getdocument = async() => {
    const result = await playlist.find()
    console.log(result)
}

getdocument()