const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: String
}, {
    timestamps: true
})
