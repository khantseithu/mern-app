const asyncHandler = require("express-async-handler");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "User registered" });
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Login success!" });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.json({ message: "User profile" });
});

// @desc    Update user profile

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
