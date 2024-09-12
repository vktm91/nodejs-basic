const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Node!");
});
app.get("/contacts", (req, res) => {
    res.send("Contacts page");
});

app.listen(3000, () => {
    console.log("Server is running");
});