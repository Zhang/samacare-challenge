const mongoose = require('mongoose');

const markupSchema = mongoose.Schema({
  fileName: { type: String, require: true },
  saveName: { type: String, require: true },
  markupBoxes: { type: Array, require: true },
});

const Markup = mongoose.model('Upload', markupSchema);

module.exports = { Markup };
