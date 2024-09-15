const express = require("express");
const router = express.Router();
const { getAllContacts, postContact, getContact, updateContact, deleteContact } = require("../controllers/contactController");

router
    .route("/")
    .get(getAllContacts)
    .post(postContact);

router
    .route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;