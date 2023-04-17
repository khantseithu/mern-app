// Description: This file contains the controller functions for the goals

//@desc Get all goals
//@route GET /api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
};

//@desc Set all goals
//@route POST /api/goals
//@access Private
const setGoal = (req, res) => {
  res.status(200).json({
    message: "Set goal",
  });
};

//@desc Update goals
//@route PUT /api/goals
//@access Private
const updateGoal = (req, res) => {
  res.status(200).json({
    message: `update goal ${req.params.id}`,
  });
};

//@desc Delete a goal
//@route DELETE /api/goals
//@access Private
const deleteGoal = (req, res) => {
  res.status(200).json({
    message: `delete goal ${req.params.id}`,
  });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
