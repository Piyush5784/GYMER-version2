const router = require("express").Router();
const Razorpay = require("razorpay");
require("dotenv").config();
const jwt = require("jsonwebtoken")
const crypto = require("crypto");
const { userModel } = require("../Models/userModel");
const { tokenVerify } = require("../Middlewares/tokenVerify")


function getAmount({ planName }) {

    let amt = 0;
    if (planName == "Basic") {
        amt = 999;
    }
    else if (planName == "Premium") {
        amt = 2299;
    }
    else if (planName == "Pro") {
        amt = 2599;
    }
    return amt;
}

router.post("/orders", async (req, res) => {
    const { planName } = req.body;
    try {
        const instance = new Razorpay({
            key_id: process.env.RazorPayID,
            key_secret: process.env.RazorPay_SecretKey
        });

        let amt = getAmount({ planName });

        const options = {
            amount: amt * 100,
            currency: "INR",
            receipt: "receipt#" + Math.floor(Math.random * 10),
        }

        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.json({
                    Message: "Something Went Wrong!",error
                })
            }
            res.status(200).json({ data: order })
        })

    } catch (error) {
        console.log(error)
        res.json({
            Message: "Internal Server Error!",error
        })
    }
})

function verifySignature(razorpay_payment_id, razorpay_order_id, razorpay_signature) {

    const data = razorpay_order_id + "|" + razorpay_payment_id;

    const generated_signature = crypto.createHmac("sha256", process.env.RazorPay_SecretKey).update(data).digest("hex");

    return generated_signature === razorpay_signature;
}

async function getUser({ authToken }) {
    console.log(authToken)
    try {
        let decode = jwt.decode(authToken)
        const userData = await userModel.findOne({
            username: decode
        })

        if (!userData) {
            return "User Not Found";
        }
        return decode;

    } catch (error) {
        console.log(error)
        console.log("Error Occurs in token Validation")
    }
}

router.post("/verify", async (req, res) => {
    const { authToken, planName } = req.body;

    const userData = await getUser({ authToken });

    const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature
    } = req.body;


    try {
        const verifySign = verifySignature(razorpay_payment_id, razorpay_order_id, razorpay_signature)


        if (verifySign) {
            return res.json({
                Message: "Payment Verified Successfully"
            })
        }
        else {
            return res.json({
                Message: "Invalid Signature sent"
            })
        }

    } catch (error) {
        console.log(error)
        return res.json({
            Message: "Internal Server Error!"
        })
    }
})

module.exports = router;
