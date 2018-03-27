import { Chef } from "./chef.model";
import { Recipe } from "../recipe/recipe.model";

const getAllChefs = () => Chef.find({}).exec();
// I Wrote _ becuase this represents root value which is i don't have and i'll not use it so _ is palceholder
const getSingleChef = (_, { id }) => Chef.findById(id).exec();

const insertNewChef = (_, { chef }) => Chef.create(chef);

const deleteSingleChef = (_, { id }) => Chef.findByIdAndRemove(id);

export const chefResolvers = {
  Query: {
    chefs: getAllChefs,
    singleChef: getSingleChef
  },
  Mutation: {
    newChef: insertNewChef,
    deleteChef: deleteSingleChef
  },
  Chef: {
    async recipes(chefInfo) {
      console.log(chefInfo)
      const recipes = await Recipe.find({ chef: chefInfo.id }).exec()
      return recipes
    }
  }
};
