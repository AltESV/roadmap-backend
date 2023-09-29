const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must have a title'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Must have a description']
    },
    content: {
        type: String
    },
    votes: {
        type: Number,
        default: 0
    },
    sessionId: [{
        type: String
    }]
});


const Roadmap = mongoose.model('Roadmap', roadmapSchema);

module.exports = Roadmap;