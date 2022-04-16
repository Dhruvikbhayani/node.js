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
            name: "react js",
            type: "backend",
            list: "no"
        })
        const savedata = await data.save();
        console.log(savedata)

    } catch (err) {
        console.log(err)
    }
}
createdata()