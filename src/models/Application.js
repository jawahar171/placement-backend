const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
});

module.exports = mongoose.model("Application", applicationSchema);
