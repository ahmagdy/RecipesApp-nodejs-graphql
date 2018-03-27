import { makeExecutableSchema } from 'graphql-tools'
import { graphqlExpress } from 'apollo-server-express'
import * as recipeType from './recipe/recipe.graphql'
import * as categoryType from './category/category.graphql'
import * as chefType from './chef/chef.graphql'
import { recipeResolvers } from './recipe/recipe.reolvers'
import { categoryResolvers } from './category/category.resolvers'
import { chefResolvers } from './chef/chef.resolvers'
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import merge from 'lodash.merge'



const schemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;


const dateResolver = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return new Date(value);// value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        },
    }),
};

export const schema = makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        recipeType,
        categoryType,
        chefType
    ],
    resolvers: merge({},
        dateResolver,
        recipeResolvers,
        categoryResolvers,
        chefResolvers)
})


export const graphQLRouter = graphqlExpress((req) => ({
    schema: schema
}))