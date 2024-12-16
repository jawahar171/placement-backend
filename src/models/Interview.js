const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  schedule: Date,
  feedback: String,
});

module.exports = mongoose.model("Interview", interviewSchema);
