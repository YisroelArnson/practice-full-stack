
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { GoalsQuery } = require('./query/GoalsQuery');
const {
  CreateGoalMutation,
  UpdateGoalMutation,
  DeleteGoalMutation
} = require('./mutation/GoalsMutation');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    goals: GoalsQuery
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createGoal: CreateGoalMutation,
    deleteGoal: DeleteGoalMutation,
    updateGoal: UpdateGoalMutation
  })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

module.exports = schema;
