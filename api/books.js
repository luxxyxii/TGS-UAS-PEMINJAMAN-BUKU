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
app.get("/", async (req, res) => {
  try {
    await dbConnect();
    const data = await Book.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/books
 */
app.post("/", async (req, res) => {
  try {
    await dbConnect();
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * PUT /api/books/:id
 */
app.put("/:id", async (req, res) => {
  try {
    await dbConnect();
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE /api/books/:id
 */
app.delete("/:id", async (req, res) => {
  try {
    await dbConnect();
    await Book.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
