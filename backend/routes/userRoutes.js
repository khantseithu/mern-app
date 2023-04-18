const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/profile", getUserProfile);

module.exports = router;
