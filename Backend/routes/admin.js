const express = require("express");
const { getUsers, adminLogin, registerAdmin } = require("./functions/AdminHandler");
const { tokenVerify } = require("../Middlewares/tokenVerify");

const adminRoutes = express.Router();

adminRoutes.get("/getUsers", tokenVerify, getUsers)

adminRoutes.post("/login", adminLogin)


module.exports = adminRoutes;