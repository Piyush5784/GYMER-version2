const express = require("express")
const app = express();

const userRoutes = require("./routes/users")
const adminRoutes = require("./routes/admin");
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.mongoDbUrl || "mongodb://0.0.0.0:27017";
const port = 3001 || process.env.port;
const cors = require("cors")
const paymentRoutes = require("./routes/Payment")

app.use(cors())

app.use(express.json());

app.use("/users", userRoutes)

app.use("/admin", adminRoutes)

app.use("/api/payment/", paymentRoutes)


app.use((err, req, res) => {
    console.log(err)
    return res.json({
        Message: "Something went wrong , i might be wrong routes called"
    })
})

mongoose.connect(url).then(
    app.listen(port, () => {
        console.log("Mongodb Connected and server is running on 3001")
    })
)
