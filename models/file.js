const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  doc_id: {
    type: String
  },
  length: {
    type: Number
  },
  name: {
    type: String
  },
  type: {
    type: String
  }
});

module.exports = mongoose.model("File", fileSchema);
