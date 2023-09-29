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
        type: String,
        default: 'https://imagedelivery.net/2chPAg1PDekJ6oI478IB9Q/ef38c7de-04e8-41b6-f8a1-d2ec43909c00/public'
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