const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Node!");
});

app.get("/contacts", (req, res) => {
    res.send("Contacts page");
});

app.post("/contacts/:id", (req, res) => {
    res.send("Create Contacts");
});

app.get("/contacts/:id", (req, res) => {
    res.send(`View Contact for ID: ${req.params.id}`);
});

app.put("/contacts/:id", (req, res) => {
    res.send(`Update Contact for ID:" ${req.params.id}`);
});

app.delete("/contacts/:id", (req, res) => {
    res.send(`Delete Contact for ID:" ${req.params.id}`);
});

app.listen(3000, () => {
    console.log("Server is running");
});