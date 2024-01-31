const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String
    },
    code: {
        type: String
    }
})


const adminModel = mongoose.model("Admins", adminSchema);

module.exports = { adminModel };