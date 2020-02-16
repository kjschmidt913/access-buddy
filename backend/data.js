const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    id: Number,
    firstName: String,
    email: String,
    lastName: String,
    residence: String
}, { timestamps: true });

module.exports = mongoose.model("Data", DataSchema);