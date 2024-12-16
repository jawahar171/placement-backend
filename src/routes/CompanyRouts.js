const express = require("express");
const { postJob, reviewApplications, scheduleInterview } = require("../controllers/companyController");
const router = express.Router();

router.post("/post-job", postJob);
router.get("/applications", reviewApplications);
router.post("/schedule-interview", scheduleInterview);

module.exports = router;
