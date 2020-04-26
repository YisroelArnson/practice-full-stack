const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const goalType = new GraphQLObjectType({
  name: 'GOAl',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  }
});

module.exports = { goalType };
