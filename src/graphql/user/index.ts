const typeDef = `  
  type User {
    _id: String
    username: String
    email: String
    name: String
    description: String
    profileImg: String
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
