const express = require("express")
const app = express();

const cors = require("cors")
app.use(cors())

const userRoutes = require("./routes/users")
const adminRoutes = require("./routes/admin");
const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.mongoDbUrl;
const port = process.env.port || 3001;
const paymentRoutes = require("./routes/Payment")
app.use(cors())

app.use(express.json());

app.use("/users", cors(), userRoutes)

app.use("/admin", cors(), adminRoutes)

app.get("/", (req, res) => {
    res.send("OK");
})

app.use("/api/payment/", cors(), paymentRoutes)


app.use((err, req, res) => {

    return res.json({
        Message: "Something went wrong , i might be wrong routes called"
    })
})

mongoose.connect(url).then(
    app.listen(port, () => {
        console.log("Mongodb Connected and server is running on 3001")
    })
)
