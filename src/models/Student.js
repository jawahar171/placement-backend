const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  resume: String,
  academicData: Object,
});

module.exports = mongoose.model("Student", studentSchema);
