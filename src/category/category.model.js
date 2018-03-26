import mongoose from 'mongoose'

const mongooseTypes = mongoose.Schema.Types

const categoryScheam = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: mongooseTypes.Date,
        default: Date.now
    }
})


export const Category = mongoose.model('category', categoryScheam);