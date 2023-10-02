const { query } = require('express');
const Roadmap = require('../models/roadmapModel');

exports.getRoadmap = async (req, res, next) => {
    try{
        const features = await Roadmap.find().sort({votes: -1})    

        res.status(200).json({
            status: 'success',
            data: {
                features
            }
        })
    } catch {
        res.status(400).json({
            status: 'error',
            message: 'entry not found'
        })
    }
}

exports.createRoadmapFeature = async (req, res, next) => {
    try {
        const newRoadmapFeature = await Roadmap.create(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                features: newRoadmapFeature
            }
        })
    } catch {
        res.status(400).json({
            status: 'error',
            message: 'entry not found'
        })
    }
}

exports.vote = async (req, res, next) => {
    const { featureId, sessionId } = req.body; 
    try {
        const feature = await Roadmap.findById(featureId);
        if(feature.sessionId.includes(sessionId)) {
            return res.status(403).json({
                status: 'error',
                message: 'You already voted'
            })
        }
        feature.votes +=1
        feature.sessionId.push(sessionId);
        await feature.save();

        res.status(200).json({
            status: 'success',
            data: {
                feature
            }
        })

    } catch {
        res.status(400).json({
            status: 'error',
            message: 'entry not found'
        })
    }
}