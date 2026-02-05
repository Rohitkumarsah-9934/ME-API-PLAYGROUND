# Me-API Playground 🚀

A full-stack MERN application for managing candidate profiles with CRUD operations, query endpoints, and a responsive frontend.

postcss.config

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


**Developer:** [Your Name]  
**Resume:** [Your Resume Link]

## 🎯 Project Overview

This project is a backend assessment submission that demonstrates:
- RESTful API design with Express.js
- MongoDB database integration with Mongoose
- React frontend with Tailwind CSS
- CRUD operations and query endpoints
- Responsive UI design
- Full-stack deployment capabilities

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Hooks** - State management

## 📁 Project Structure

```
me-api-playground/
├── backend/
│   ├── controllers/
│   │   └── profileController.js    # Business logic
│   ├── models/
│   │   └── Profile.js               # MongoDB schema
│   ├── routes/
│   │   └── profileRoutes.js         # API routes
│   ├── .env                         # Environment variables
│   ├── server.js                    # Express server setup
│   ├── seed.js                      # Database seeding script
│   ├── schema.md                    # Database schema documentation
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Profile.js           # Profile display component
│   │   │   ├── SearchBar.js         # Search & filter component
│   │   │   └── ProjectsList.js      # Projects display component
│   │   ├── services/
│   │   │   └── api.js               # API service layer
│   │   ├── App.js                   # Main application component
│   │   ├── index.js                 # React entry point
│   │   └── index.css                # Global styles + Tailwind
│   ├── .env                         # Environment variables
│   ├── tailwind.config.js           # Tailwind configuration
│   ├── postcss.config.js            # PostCSS configuration
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd me-api-playground
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

### Configuration

1. **Backend Configuration**

Create/edit `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/me-api-playground
NODE_ENV=development
```

2. **Frontend Configuration**

Create/edit `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Running the Application

#### Local Development

1. **Start MongoDB**
```bash
# Make sure MongoDB is running
mongod
```

2. **Seed the Database** (First time only)
```bash
cd backend
node seed.js
```

3. **Start Backend Server**
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

4. **Start Frontend** (In a new terminal)
```bash
cd frontend
npm start
# Frontend runs on http://localhost:3000
```

#### Production Build

1. **Build Frontend**
```bash
cd frontend
npm run build
```

2. **Start Backend**
```bash
cd backend
npm start
```

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Profile Endpoints
- `POST /api/profile` - Create a new profile
- `GET /api/profile` - Get profile data
- `PUT /api/profile` - Update profile

### Query Endpoints
- `GET /api/projects?skill=python` - Get projects by skill
- `GET /api/skills/top` - Get all skills
- `GET /api/search?q=keyword` - Search profiles

### Example Requests

**Get Profile:**
```bash
curl http://localhost:5000/api/profile
```

**Search by Skill:**
```bash
curl http://localhost:5000/api/projects?skill=JavaScript
```

**Search Profile:**
```bash
curl http://localhost:5000/api/search?q=developer
```

## 📊 Database Schema

See `backend/schema.md` for detailed MongoDB schema documentation.

### Profile Schema Overview
```javascript
{
  name: String,
  email: String (unique),
  education: String,
  skills: [String],
  projects: [{ title, description, links }],
  work: [{ company, position, duration, description }],
  links: { github, linkedin, portfolio }
}
```

## 🎨 Features

### Backend Features
✅ RESTful API with Express.js  
✅ MongoDB database with Mongoose ODM  
✅ CRUD operations for profile management  
✅ Query endpoints for filtering and searching  
✅ CORS enabled for frontend communication  
✅ Health check endpoint  
✅ Error handling middleware  
✅ Database seeding with real data  

### Frontend Features
✅ Responsive design with Tailwind CSS  
✅ Profile viewing and display  
✅ Search functionality  
✅ Project filtering by skill  
✅ Real-time API status indicator  
✅ Loading and error states  
✅ Clean, modern UI design  
✅ Mobile-friendly layout  

## 🧪 Testing

### Manual Testing

1. **Health Check:**
```bash
curl http://localhost:5000/api/health
```
Expected: `{ "success": true, "message": "API is running" }`

2. **Get Profile:**
```bash
curl http://localhost:5000/api/profile
```
Expected: Profile data with all fields

3. **Filter Projects:**
```bash
curl http://localhost:5000/api/projects?skill=React
```
Expected: Array of projects using React

### Frontend Testing

1. Open `http://localhost:3000`
2. Verify profile displays correctly
3. Test search functionality
4. Test skill-based filtering
5. Check responsiveness on mobile

## 📝 Sample cURL Commands

**Create Profile (POST):**
```bash
curl -X POST http://localhost:5000/api/profile \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "education": "Master of Computer Science",
    "skills": ["Python", "Django", "PostgreSQL"]
  }'
```

**Update Profile (PUT):**
```bash
curl -X PUT http://localhost:5000/api/profile \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith Updated",
    "skills": ["Python", "Django", "PostgreSQL", "Docker"]
  }'
```

## 🚀 Deployment

### Backend Deployment (e.g., Render, Railway)

1. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: Server port (usually auto-assigned)
   - `NODE_ENV`: production

2. Deploy command: `npm start`

### Frontend Deployment (e.g., Vercel, Netlify)

1. Set environment variable:
   - `REACT_APP_API_URL`: Your deployed backend URL

2. Build command: `npm run build`
3. Publish directory: `build`

### MongoDB Deployment

- Use MongoDB Atlas for cloud hosting
- Update `MONGODB_URI` in backend `.env` with Atlas connection string

## 📋 Assessment Criteria Checklist

### ✅ Backend & API
- [x] Expose endpoints to create/read/update profile
- [x] Add query endpoints (GET /projects?skill=python, GET /skills/top, GET /search?q=...)
- [x] Provide GET /health for liveness

### ✅ Database
- [x] Use proper database (MongoDB with Mongoose)
- [x] Include schema documentation (schema.md)
- [x] Seed with real data (seed.js)

### ✅ Frontend
- [x] Minimal UI with React
- [x] Search by skill functionality
- [x] List projects display
- [x] View profile information
- [x] Call hosted API with CORS configured

### ✅ Hosting & Documentation
- [x] README with architecture, setup instructions
- [x] Schema documentation
- [x] Sample curl/Postman examples
- [x] Known limitations documented
- [x] Resume link in README

## ⚠️ Known Limitations

1. **Single Profile:** Currently supports only one profile (can be extended for multiple users)
2. **No Authentication:** No auth mechanism implemented (suitable for assessment purposes)
3. **Basic Validation:** Limited input validation on frontend
4. **No Pagination:** All results returned without pagination
5. **Case-Sensitive Search:** Search is case-insensitive but exact match for some queries
6. **No Image Upload:** Profile images not supported in current version
7. **No Tests:** Unit/integration tests not included (can be added with Jest/Mocha)

## 🔮 Future Enhancements

- Multi-user support with authentication
- Image upload for profile pictures
- Advanced search with filters
- Pagination for large datasets
- Export profile as PDF
- Email notifications
- Rate limiting
- Comprehensive test coverage
- GraphQL API option
- WebSocket for real-time updates

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

## 👤 Developer Information

**Name:** [Your Name]  
**Email:** [Your Email]  
**Resume:** [Your Resume Link]  
**GitHub:** [Your GitHub Profile]  
**LinkedIn:** [Your LinkedIn Profile]  

## 📄 License

This project is created for assessment purposes.

---

**Built with ❤️ using MERN Stack + Tailwind CSS**
