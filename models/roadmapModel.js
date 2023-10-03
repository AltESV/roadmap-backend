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
    details: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.'
    },
    status: {
        type: String,
        default: 'Pending'
    },
    content: {
        type: String,
        default: 'https://imagedelivery.net/2chPAg1PDekJ6oI478IB9Q/4ea292f3-a0c3-41bf-833d-033e77771f00/public'
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