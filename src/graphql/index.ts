import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'

import Ingredient from './ingredient'
import Recipe from './recipe'
import User from './user'

import Query from './query'
import Mutation from './mutation'

const schema = makeExecutableSchema({
  typeDefs: [Ingredient.typeDef, Recipe.typeDef, User.typeDef, Query, Mutation],
  resolvers: [Ingredient.resolvers, Recipe.resolvers, User.resolvers],
})

const apollo = new ApolloServer({ schema })

export default apollo
