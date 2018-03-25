import { Chef } from './chef.model'


const getAllChefs = () => Chef.find({}).exec
// I Wrote _ becuase this represents root value which is i don't have and i'll not use it so _ is palceholder
const getSingleChef = (_, { id }) => Chef.findById(id).exec()


const insertNewChef = (_, { newChef }) => Chef.create(newChef)
const deleteSingleChef = (_, { id }) => Chef.findByIdAndRemove(id)



export const chefResolvers = {
    Query: {
        chefs: getAllChefs,
        singleChef: getSingleChef
    },
    Mutation: {
        newChef: insertNewChef,
        deleteChef: deleteSingleChef
    }
}