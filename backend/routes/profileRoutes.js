const express = require('express');
const router = express.Router();
const {
  createProfile,
  getProfile,
  updateProfile,
  getProjectsBySkill,
  getTopSkills,
  search
} = require('../controllers/profileController');

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

// Profile CRUD endpoints
router.post('/profile', createProfile);
router.get('/profile', getProfile);
router.put('/profile', updateProfile);

// Query endpoints
router.get('/projects', getProjectsBySkill);
router.get('/skills/top', getTopSkills);
router.get('/search', search);

module.exports = router;
