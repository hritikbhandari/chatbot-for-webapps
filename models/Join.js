const mongoose = require('mongoose');
const { Schema } = mongoose;

const joinSchema = new Schema({
    // course: String,
    counter: { type: Number, default: 1 }
});

mongoose.model('join', joinSchema);