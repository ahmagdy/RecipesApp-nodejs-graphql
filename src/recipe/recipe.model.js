import mongoose from 'mongoose'

const mongooseTypes = mongoose.Schema.Types

const recipeScheam = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongooseTypes.ObjectId,
        ref: 'category',
        required: true
    },
    chef: {
        type: mongooseTypes.ObjectId,
        ref: 'chef',
        required: true
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