import { Recipe } from './recipe.model'

const getAllRecipes = () => Recipe.find({}).exec()

const getSingleRecipe = (_, { id }) => Recipe.findById(id).exec()


const createNewRecipe = (_, { recipe }) => Recipe.create(recipe)

const deleteSingleRecipe = (_, { id }) => Recipe.findByIdAndRemove(id).exec()



export const recipeResolvers = {
    Query: {
        recipes: getAllRecipes,
        singleRecipe: getSingleRecipe
    },
    Mutation: {
        newRecipe: createNewRecipe,
        deleteRecipe: deleteSingleRecipe
    },
    Recipe: {
        async category(recipe) {
            const populatedRecipe = await recipe.populate('category').execPopulate()
            return populatedRecipe.category
        },
        async chef(recipe) {
            const populatedRecipe = await recipe.populate('chef').execPopulate()
            return populatedRecipe.chef
        }
    }
};