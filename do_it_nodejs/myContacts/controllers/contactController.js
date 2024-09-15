const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// Get all contacts
// GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    const users = [
        { name: "Kim", email: "kim@google.com", phone: "01011112222"},
        { name: "Lee", email: "Lee@google.com", phone: "01033334444"}
    ]
    res.render("getAll", { users: users });
});   // asyncHandler로 에러처리를 하여 try-catch를 사용하지 않아도 된다.


// Create a contact
// POST /contacts
const postContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        return res.status(400).send("Name, Email, Phone are required");
    }

    const contact = await Contact.create({
        name, email, phone
    });
    res.status(200).send(contact);
});


// Get a contact
// GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.status(200).send(contact);
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
    res.json(contact);
});


// Delete a contact
// DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if (!contact) {
        throw new Error("Contact not found");
    }

    await Contact.deleteOne();

    res.send('Deleted');
});

module.exports = { getAllContacts, postContact, getContact, updateContact, deleteContact };