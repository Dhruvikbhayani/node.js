const validator = require('validator')
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
    },
    email: {
        type: String,
        required: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Email is invaild")

            }
        }
    }
})
const playlist = new mongoose.model("playlist", playschema)

// //insert data 


// // const data = new playlist({
// //     name: "node js",
// //     type: "backend",
// //     list: "no"
// // })
// // data.save().then(() => {
// //     console.log("document insert")
// // })

const createdata = async() => {
    try {
        //             const data = new playlist({
        //                 name: "js",
        //                 type: "frontend",
        //                 list: "no"
        //             })
        //             const data1 = new playlist({
        //                 name: "mongodb",
        //                 type: "database",
        //                 list: "no"
        //             })
        //             const data2 = new playlist({
        //                 name: "mongoose",
        //                 type: "module",
        //                 list: "no"
        //             })
        const data3 = new playlist({
            name: "express",
            type: "backend",
            list: "no",
            email: "dk@test.com"
        })
        const savedata = await playlist.insertMany([data3]);
        console.log(savedata)

    } catch (err) {
        console.log(err)


    }
}
createdata()



//read data 
// const getdocument = async() => {
//     const result = await playlist.find()
//     console.log(result)
// }

// getdocument()

//update  document

// const updateDocument = async(_id) => {
//     try {
//         const result = await playlist.findByIdAndUpdate({ _id }, {
//             $set: {
//                 name: "node js"
//             }
//         })
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }

// updateDocument('625a5aa758ac0a7f6d744787')


// delete documents

const deleteDocument = async(_id) => {
        try {

            const result = await playlist.deleteOne({ _id })
            console.log(result)
        } catch (err) {
            console.log(err)
        }

    }
    // deleteDocument('625e3bbb379dd863db1826ab')