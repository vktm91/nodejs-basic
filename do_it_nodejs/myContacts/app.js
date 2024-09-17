const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.use(methodOverride("_method"));

dbConnect();

app.use(express.json());   // 순서주의! 아래 router보다 먼저 설정 해야 한다.
app.use(express.urlencoded({extended: true}));   // extended: true로 설정시 query String이 중복된 개체인 것도 처리 할 수 있게 된다.

app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(3000, () => {
    console.log("Server is running");
});