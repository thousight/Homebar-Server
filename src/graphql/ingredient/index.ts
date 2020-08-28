const typeDef = `  
  type Ingredient {
    _id: String
    name: String
    stockAmount: Float
    unit: String
  }
`
const resolvers = {
  Query: {},
  Mutation: {},
}

export default {
  typeDef,
  resolvers,
}
