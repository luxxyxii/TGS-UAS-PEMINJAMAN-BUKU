const express = require("express");
const cors = require("cors");
const dbConnect = require("./_db");
const Loan = require("../models/Loan");

const app = express();
app.use(cors());
app.use(express.json());

/**
 * GET /api/loans
 */
app.get("/api/loans", async (req, res) => {
  await dbConnect();
  const data = await Loan.find();
  res.json(data);
});

/**
 * POST /api/loans
 */
app.post("/api/loans", async (req, res) => {
  await dbConnect();
  const loan = await Loan.create(req.body);
  res.json(loan);
});

module.exports = app;
