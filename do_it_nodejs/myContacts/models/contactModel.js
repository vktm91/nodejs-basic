const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"]
        },
        email: {
            type: String
        },
        created: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    })

// schema를 model로 컴파일하여 export
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;