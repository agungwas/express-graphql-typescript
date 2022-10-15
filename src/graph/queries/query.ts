import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import articleType from '../types/type';

export default {
  getArticle: {
    type: new GraphQLObjectType({
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
    }),
    args: {},
    resolve: () => {
      return {
        id: '100',
        username: 'test',
        
      }
    }
  }
}