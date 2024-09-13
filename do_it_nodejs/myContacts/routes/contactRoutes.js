const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.send("Contacts page");
    })
    .post((req, res) => {
        console.log(req.body);
        const {name, email, phone} = req.body;
        if (!name || !email || !phone) {
            return res.send("Name, Email, Phone are required");
        }

        res.send("Create Contacts");
    });

// app.get("/contacts", (req, res) => {
//     res.send("Contacts page");
// });
//
// app.post("/contacts/:id", (req, res) => {
//     res.send("Create Contacts");
// });

router
    .route("/:id")
    .get((req, res) => {
        res.send(`View Contact for ID: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update Contact for ID:" ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete Contact for ID:" ${req.params.id}`);
    });

// app.get("/contacts/:id", (req, res) => {
//     res.send(`View Contact for ID: ${req.params.id}`);
// });
//
// app.put("/contacts/:id", (req, res) => {
//     res.send(`Update Contact for ID:" ${req.params.id}`);
// });
//
// app.delete("/contacts/:id", (req, res) => {
//     res.send(`Delete Contact for ID:" ${req.params.id}`);
// });

module.exports = router;