/* eslint-disable no-unused-vars */
const { goalType } = require('../nodeTypes');
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID
} = require('graphql');
const GoalService = require('../../services/GoalService');

const CreateGoalMutation = {
  type: goalType,
  args: {
    title: {type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { title, content }) => {
    const goalService = new GoalService();
    const newGoal = await goalService.createGoal({ title, content });

    return newGoal;
  }
};

const DeleteGoalMutation = {
  type: GraphQLID,
  args: {
    _id: { type: GraphQLID }
  },
  resolve: async (_, { _id }) => {
    const goalService = new GoalService();
    const res = await goalService.deleteGoal(_id);

    if (res.ok) {
      return _id;
    }
  }
};

const UpdateGoalMutation = {
  type: goalType,
  args: {
    _id: { type: GraphQLID },
    title: {type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { _id, title, content }) => {
    const goalService = new GoalService();
    const updatedGoal = await goalService.updateGoal(_id, {title, content });

    return updatedGoal;
  }
};

module.exports = { CreateGoalMutation, UpdateGoalMutation, DeleteGoalMutation };
