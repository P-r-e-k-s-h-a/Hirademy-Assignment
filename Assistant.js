// models/Assistant.js
const mongoose = require("mongoose");

const assistantSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  salary: Number,
  city: String,
  country: String,
  department: String,
  role: String,
});

const Assistant = mongoose.model("Assistant", assistantSchema);

module.exports = Assistant;
