const Profile = require('../models/Profile');

// Create a new profile
exports.createProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get profile
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({
        success: false,
        error: 'Profile not found'
      });
    }
    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update profile
exports.updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      {},
      req.body,
      { new: true, runValidators: true }
    );
    if (!profile) {
      return res.status(404).json({
        success: false,
        error: 'Profile not found'
      });
    }
    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get projects by skill
exports.getProjectsBySkill = async (req, res) => {
  try {
    const { skill } = req.query;
    const profile = await Profile.findOne({
      skills: { $regex: skill, $options: 'i' }
    });
    
    if (!profile) {
      return res.status(404).json({
        success: true,
        data: []
      });
    }
    
    res.status(200).json({
      success: true,
      data: profile.projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get top skills (all skills)
exports.getTopSkills = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({
        success: true,
        data: []
      });
    }
    res.status(200).json({
      success: true,
      data: profile.skills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Search functionality
exports.search = async (req, res) => {
  try {
    const { q } = req.query;
    const profile = await Profile.findOne({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { skills: { $regex: q, $options: 'i' } },
        { education: { $regex: q, $options: 'i' } }
      ]
    });
    
    res.status(200).json({
      success: true,
      data: profile || null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
