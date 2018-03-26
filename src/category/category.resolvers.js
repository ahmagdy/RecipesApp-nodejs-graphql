import { Category } from './category.model'


const getAllCategories = () => Category.find({}).exec()

const getOneById = id => Category.findById(id).exec()



const insertOne = (_, { category }) => Category.create(category)

const updateOne = (id, update) => Category.findByIdAndUpdate(id, update, { new: true }).exec()

const deleteOne = id => Category.findByIdAndRemove(id).exec()

export const categoryResolvers = {
    Query: {
        categories: getAllCategories,
        singleCategory: getOneById
    },
    Mutation: {
        newCategory: insertOne,
        updateCategory: updateOne,
        deleteCategory: deleteOne
    }
}