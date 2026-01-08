const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  bookId: String,
  namaPeminjam: String,
  tanggalPinjam: Date,
  tanggalKembali: Date
});

module.exports = mongoose.models.Loan || mongoose.model("Loan", LoanSchema);
