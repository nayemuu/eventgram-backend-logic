const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Image', imageSchema);
