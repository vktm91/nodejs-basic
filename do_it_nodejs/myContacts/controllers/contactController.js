const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// Get all contacts
// GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();

    res.render("index", { contacts: contacts });
});   // asyncHandler로 에러처리를 하여 try-catch를 사용하지 않아도 된다.

// View add Contact form
// GET /contacts/add
const addContactForm = (req, res) => {
    res.render("add");
};

// Create a contact
// POST /contacts/add
const postContact = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        return res.send("Name, Email, Phone are required");
    }

    const contact = await Contact.create({
        name, email, phone
    });
    res.redirect("/contacts");
});


// Get a contact
// GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.render("update", { contact: contact });
});


// Update a contact
// PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;
    const contact = await Contact.findById(id);
    if (!contact) {
        throw new Error("Contact not found");
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    contact.save();

    // res.status(200).send(contact);
    res.redirect("/contacts");
});


// Delete a contact
// DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
    const id = req.params.id;

    await Contact.findByIdAndDelete(id);

    res.redirect("/contacts");
});

module.exports = { getAllContacts, postContact, getContact, updateContact, deleteContact, addContactForm };