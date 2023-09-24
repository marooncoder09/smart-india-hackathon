const { model, Schema } = require('mongoose');

const tempSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
})

module.exports = model('Temp', tempSchema);