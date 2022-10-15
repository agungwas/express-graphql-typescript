import { GraphQLObjectType } from 'graphql'
import article from './queries/query'

export default {
  query: new GraphQLObjectType({
    name: 'rootQuery',
    fields: () => ({
      ...article
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'rootMutation',
    fields: () => ({
      ...article
    }),
  }),
}