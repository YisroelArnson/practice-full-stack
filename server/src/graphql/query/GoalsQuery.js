const { goalType } = require('../nodeTypes');
const { GraphQLList } = require('graphql');
const GoalService = require('../../services/GoalService');

const GoalsQuery = {
  type: GraphQLList(goalType),
  args: {},
  resolve: async () => {
    const goalService = new GoalService();
    const goals = await goalService.getAllGoals();

    return goals;
  }
};

module.exports = { GoalsQuery };
