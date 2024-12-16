const express = require("express");
const { register, login, submitApplication, updateProfile } = require("src\routes\StudentRoutes.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/apply", submitApplication);
router.put("/update", updateProfile);

module.exports = router;
