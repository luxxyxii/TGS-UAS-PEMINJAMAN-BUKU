import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  judul: String,
  penulis: String,
  tahun: Number,
  stok: Number,
});

export default mongoose.models.Book ||
  mongoose.model("Book", BookSchema);
