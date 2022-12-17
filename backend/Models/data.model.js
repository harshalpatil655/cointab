const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  results: { type: Array },
});

const dataModel = mongoose.model("cointab", dataSchema);

module.exports = { dataModel };
