const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema({
  prompt: String,
  code: String,
});

module.exports = mongoose.model("Website", websiteSchema);
