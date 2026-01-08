import dbConnect from "./_db";
import Book from "../models/Book";

export default async function handler(req, res) {
  try {
    await dbConnect();

    // GET /api/books
    if (req.method === "GET") {
      const data = await Book.find();
      return res.status(200).json(data);
    }

    // POST /api/books
    if (req.method === "POST") {
      const book = await Book.create(req.body);
      return res.status(201).json(book);
    }

    // PUT /api/books?id=xxx
    if (req.method === "PUT") {
      const { id } = req.query;
      await Book.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ success: true });
    }

    // DELETE /api/books?id=xxx
    if (req.method === "DELETE") {
      const { id } = req.query;
      await Book.findByIdAndDelete(id);
      return res.status(200).json({ success: true });
    }

    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    return res.status(405).end("Method Not Allowed");
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
