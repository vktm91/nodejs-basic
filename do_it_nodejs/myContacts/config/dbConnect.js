const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnect;