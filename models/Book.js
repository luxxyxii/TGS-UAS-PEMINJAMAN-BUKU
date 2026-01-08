const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  judul: String,
  penulis: String,
  tahun: Number,
  stok: Number
});

module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);
