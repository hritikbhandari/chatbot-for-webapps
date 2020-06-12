const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
    // name: String,
    // email: String,
    // phone: String,
    text: String,
    registerDate: Date
});

mongoose.model('registration', registrationSchema);