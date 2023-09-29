const express = require('express');
const roadmapController = require('../controllers/roadmapController');
const router = express.Router();

router
.route('/')
.get(roadmapController.getRoadmap)
.post(roadmapController.createRoadmapFeature)

router
.post('/vote', roadmapController.vote)


module.exports = router;