import mongoose from 'mongoose'

const mongooseTypes = mongoose.Schema.Types

const recipeScheam = new mongoose.Schema({
    titel: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongooseTypes.ObjectId,
        ref: 'category'
    },
    upvotes: {
        type: mongooseTypes.Number,
        required: true,
        default: 0
    },
    downvotes: {
        type: mongooseTypes.Number,
        required: true,
        default: 0
    }
})


export const Recipe = mongoose.model('recipe', recipeScheam);