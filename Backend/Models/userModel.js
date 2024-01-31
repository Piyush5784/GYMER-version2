const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    purchasedCourses: {
        type: [String],
        default: null
    }
})


const userModel = mongoose.model("users", userSchema)

module.exports = { userModel }