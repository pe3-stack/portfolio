const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String
    },
    job: {
        type: String
    }
})

const Contact = mongoose.model('Contacts', ContactSchema);

module.exports = Contact;