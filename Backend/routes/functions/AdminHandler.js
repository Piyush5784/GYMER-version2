const { adminModel } = require("../../Models/adminModel")
const jwt = require("jsonwebtoken");
const { userModel } = require("../../Models/userModel");
require("dotenv").config()

const jwtPassword = process.env.jwtPassword;

async function adminLogin(req, res) {
    let { email, password, code } = req.body;
    try {

        const adminExist = await adminModel.findOne({
            email,
            password,
            code
        })

        if (!adminExist) {
            return res.json({
                Message: 'Admin Not Exist'
            })
        }


        const authToken = jwt.sign(email, jwtPassword)

        res.json({
            Message: "Login Successful", authToken
        })
    } catch (error) {
        console.log(error)
        res.json({
            Message: "Something error happens while Login Admin"
        })
    }
}




async function getUsers(req, res) {
    let { authToken } = req.body;
    try {
        const adminEmail = jwt.decode(authToken);


        let adminExist = await adminModel.findOne({
            email: adminEmail
        })

        if (!adminExist) {
            return res.json({
                Message: 'Admin Not Exist'
            })
        }


        let usersData = await userModel.find({});

        let userDataArray = usersData.map(user => ({
            username: user.username,
            emails: user.email,
            purchasedCourses: user.purchasedCourses
        }))

        res.json({
            Message: "Success", userDataArray
        })

    } catch (error) {

    }
}



module.exports = { adminLogin, getUsers }