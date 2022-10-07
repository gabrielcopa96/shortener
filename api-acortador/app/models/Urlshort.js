const mongoose = require("mongoose")

const urlshortSchema = new mongoose.Schema({
    codeShort: {
        type: String,
        required: true
    },
    urlOriginal: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("urlshort", urlshortSchema);