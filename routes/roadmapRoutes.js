const express = require('express');
const roadmapController = require('../controllers/roadmapController');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router
.route('/')
.get(roadmapController.getRoadmap)
.post(authMiddleware, roadmapController.createRoadmapFeature)

router
.post('/vote', roadmapController.vote)


module.exports = router;