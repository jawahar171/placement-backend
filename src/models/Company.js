const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  recruiter: Object,
  jobListings: [{ title: String, description: String, requirements: String, location: String }],
});

module.exports = mongoose.model("Company", companySchema);
