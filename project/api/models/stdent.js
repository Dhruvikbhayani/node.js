const mongoose = require('mongoose')
const validator = require('validator')

const studentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id is already present"],
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('Unvaid Email')

            }
        }
    },
    Phone: {
        type: Number,
        required: true,
        minlength: 10
    },
    address: {
        type: String,
        required: true,
    }

})

//we will create model

const student = new mongoose.model("students", studentschema)

module.exports = student