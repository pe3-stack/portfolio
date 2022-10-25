const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    name: {
        type: String
    },
    role: {
        type: String
    }
})

const Info = mongoose.model('Infos', InfoSchema);

module.exports = Info;