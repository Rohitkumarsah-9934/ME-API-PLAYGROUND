const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const profileRoutes = require('./routes/profileRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
   credentials: true,
    origin :  "https://me-api-playground-frontend-7os4.onrender.com"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', profileRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Me-API Playground Backend',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      profile: '/api/profile',
      projects: '/api/projects?skill=python',
      topSkills: '/api/skills/top',
      search: '/api/search?q=keyword'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
