const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    firstName: String,
    email: String,
    lastName: String,
    residence: String,
    time: String
}, { timestamps: true });

module.exports = mongoose.model("Data", DataSchema);
