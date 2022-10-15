import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'article',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    email: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
  }),
});