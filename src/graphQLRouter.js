import { makeExecutableSchema } from 'graphql-tools'
import { graphqlExpress } from 'apollo-server-express'
import * as recipeType from './recipe/recipe.graphql'
import * as categoryType from './category/category.graphql'
import * as chefType from './chef/chef.graphql'
import { recipeResolvers } from './recipe/recipe.reolvers'
import { categoryResolvers } from './category/category.resolvers'
import { chefResolvers } from './chef/chef.resolvers'



const schemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;
export const schema = makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        recipeType,
        categoryType,
        chefType
    ],
    resolvers: {
        recipeResolvers,
        categoryResolvers,
        chefResolvers
    }
})


export const graphQLRouter = graphqlExpress((req) => ({
    schema: schema
}))