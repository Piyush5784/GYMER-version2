const mongoose = require("mongoose");
const { userModel } = require("../../Models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const jwtPassword = "8t42nfq9"

async function getUsersData(req, res) {
    const { authToken } = req.body
    try {
        let decode = jwt.decode(authToken)
        const userData = await userModel.findOne({
            username: decode
        })

        if (!userData) {
            return res.json({ Message: "User Not Found" })
        }
        res.json({
            Message: "Success",
            username: userData.username, email: userData.email, purchasedCourses: userData.purchasedCourses
        })

    } catch (error) {

        res.json({
            Message: "Something error happens while importing user data", error
        })
    }

}

async function userLogin(req, res) {
    let { inputs } = req.body;
    let { username, password } = inputs;

    //check user
    //check password
    //send json
    //send msg
    try {

        const userExist = await userModel.findOne({
            username
        })

        if (!userExist) {
            return res.json({
                Message: "No record Found", userExist
            })
        }

        let comparePass = await bcrypt.compare(password, userExist.password);


        if (!comparePass) {
            return res.json({
                Message: "Invalid password"
            })
        }

        const token = jwt.sign(username, jwtPassword)

        res.json({
            Message: "User Logged in", authToken: token
        })

    } catch (error) {
        console.log(error)
        res.json({
            Message: "Something error happens while Login user"
        })
    }


}

async function userRegister(req, res) {
    let { inputs } = req.body

    let { username, password, email } = inputs;


    //find user with username
    //hashed password
    //store data
    //return message

    try {

        // const userExistUsername = await userModel.findOne({
        //    $or:[
        //     username,
        //     email
        //    ]
        // })


        const userExistUsername = await userModel.findOne({
            username
        })

        const userExistEmail = await userModel.findOne({
            email
        })

        if (userExistUsername) {
            return res.json({
                message: "User already exists with this username"
            })
        }
        if (userExistEmail) {
            return res.json({
                message: "User exists with this email"
            })
        }


        const hashedPass = await bcrypt.hash(password.toString(), 10);


        const user = await userModel.create({
            email,
            password: hashedPass,
            username,

        })

        await user.save();
        res.json({
            message: "User successfully registered"
        })

    } catch (error) {
        res.json({
            Message: "Something error happens while Registering user"
        })
    }
}


async function changePassword(req, res) {

    //find user
    //check old password
    //hashpassword
    //setpassword


    const { authToken, oldpass, newpass } = req.body;
    console.log(authToken, oldpass, newpass)

    try {

        const username = jwt.decode(authToken, jwtPassword);
        // console.log(decode)
        const userOldPassword = await userModel.findOne({
            username
        })
        const checkOldPass = await bcrypt.compare(oldpass, userOldPassword.password)

        if (!checkOldPass) {
            return res.json({ Message: "Password Mismatched" })
        }

        const hashedPassword = await bcrypt.hash(newpass, 10);
        const updatedUser = await userModel.findOneAndUpdate(
            { username },
            { $set: { password: hashedPassword } },
            { new: true }
        );

        if (!updatedUser) {
            res.json({ Message: 'User not found' });
            return;
        }
        else {
            res.json({ Message: "Password Successfully changed" })
        }

    } catch (error) {
        console.log(error)
        res.json({
            Message: "Can't able to change password"
        })
    }
}


async function purchaseCourse(req, res) {
    const { authToken, planName } = req.body
    console.log(authToken, planName)

    try {

        let decode = jwt.decode(authToken)
        const userData = await userModel.findOne({
            username: decode
        })

        if (!userData) {
            return res.json({ Message: "User Not Found" })
        }

        const updateModel = await userModel.updateOne(
            { username: decode },
            { $addToSet: { purchasedCourses: planName } }
        );

        res.json({
            Message: "Course SuccessFully Purchased"
        })


    } catch (error) {
        console.log(error)
        res.json({
            Message: "Something error happens while importing user data"
        })
    }
}



module.exports = { getUsersData, userLogin, userRegister, purchaseCourse, changePassword };
