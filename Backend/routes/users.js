const express = require("express");

const cors = require("cors")

const router = express.Router();

router.use(cors());

const { getUsersData, userRegister, userLogin, purchaseCourse, changePassword } = require("./functions/UserHandler");

const { tokenVerify } = require("../Middlewares/tokenVerify");

router.post("/login", userLogin)

router.get("/", (req, res) => { res.send("working") })

router.post("/purchaseCourse", tokenVerify, purchaseCourse)

router.get("/", (req, res) => {
    res.send("Working")
})

router.post("/register", userRegister)

router.post("/changePassword", tokenVerify, changePassword)

router.post("/getUsersData",
    tokenVerify, getUsersData)

module.exports = router;


