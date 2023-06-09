const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

//@desc Get all goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});
//@desc Set all goals
//@route POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a goal");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

//@desc Update goals
//@route PUT /api/goals
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    {
      text: req.body.text,
    },
    { new: true }
  );
  res.status(200).json(updatedGoal);
});

//@desc Delete a goal
//@route DELETE /api/goals
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  const user = await User.findById(req.user.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }
  await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
