const express = require("express");
const cors = require("cors");
const dbConnect = require("./_db");
const Book = require("../models/Book");

const app = express();
app.use(cors());
app.use(express.json());

/**
 * GET /api/books
 */
app.get("/api/books", async (req, res) => {
  await dbConnect();
  const data = await Book.find();
  res.json(data);
});

/**
 * POST /api/books
 */
app.post("/api/books", async (req, res) => {
  await dbConnect();
  const book = await Book.create(req.body);
  res.json(book);
});

/**
 * PUT /api/books/:id
 */
app.put("/api/books/:id", async (req, res) => {
  await dbConnect();
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
});

/**
 * DELETE /api/books/:id
 */
app.delete("/api/books/:id", async (req, res) => {
  await dbConnect();
  await Book.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = app;
