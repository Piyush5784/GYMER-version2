
const jwt = require("jsonwebtoken")
const jwtPassword = "8t42nfq9"

async function tokenVerify(req, res, next) {
    const { authToken } = req.body;
    try {
        await jwt.verify(authToken, jwtPassword)
        next();
    } catch (error) {
        console.log("Error Occurs bacause of Invalid Token sent")
        res.send('Invalid token')
    }
}

module.exports = { tokenVerify }