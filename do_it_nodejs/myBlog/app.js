require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

connectDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded( {extended: true }));

app.use(cookieParser());
app.use(methodOverride("_method"));

app.use("/", require("./routes/main"));
app.use("/", require("./routes/admin"));

// app.use(express.static("./routes/main"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});