const typeDef = `  
  type Recipe {
    _id: String
    title: String
    subtitle: String
    description: String
    ingredients: [IngredientCost]
    steps: [String]
  }

  type IngredientCost {
    ingredient: Ingredient
    amount: Float
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
