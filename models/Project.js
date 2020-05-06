const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    subject: {
        type: String,
        required: true
    },
    Project: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('project', ProjectSchema)