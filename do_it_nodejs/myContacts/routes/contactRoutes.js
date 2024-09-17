const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    postContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
} = require("../controllers/contactController");

router.route("/")
    .get(getAllContacts);

router.route("/add")
    .get(addContactForm)
    .post(postContact);

router.route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;