# MongoDB Schema Documentation

## Database: me-api-playground

### Collection: profiles

#### Schema Structure:

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  education: String (required),
  skills: [String],
  projects: [
    {
      _id: ObjectId,
      title: String (required),
      description: String (required),
      links: String
    }
  ],
  work: [
    {
      _id: ObjectId,
      company: String (required),
      position: String (required),
      duration: String,
      description: String
    }
  ],
  links: {
    github: String,
    linkedin: String,
    portfolio: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### Indexes:

- Primary Index: `_id` (default)
- Unique Index: `email`

#### Example Document:

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "education": "Bachelor of Technology in Computer Science, XYZ University (2019-2023)",
  "skills": [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Python"
  ],
  "projects": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "title": "E-commerce Platform",
      "description": "Full-stack e-commerce application with payment integration",
      "links": "https://github.com/johndoe/ecommerce-platform"
    }
  ],
  "work": [
    {
      "_id": "507f1f77bcf86cd799439013",
      "company": "Tech Solutions Inc.",
      "position": "Junior Full Stack Developer",
      "duration": "Jan 2023 - Present",
      "description": "Developing and maintaining web applications"
    }
  ],
  "links": {
    "github": "https://github.com/johndoe",
    "linkedin": "https://linkedin.com/in/johndoe",
    "portfolio": "https://johndoe.dev"
  },
  "createdAt": "2023-10-15T10:30:00.000Z",
  "updatedAt": "2023-10-15T10:30:00.000Z"
}
```

#### Constraints:

- `name`: Must be a non-empty string
- `email`: Must be a valid email format and unique across all documents
- `education`: Must be a non-empty string
- `skills`: Array of strings, can be empty
- `projects.title`: Required when project exists
- `projects.description`: Required when project exists
- `work.company`: Required when work experience exists
- `work.position`: Required when work experience exists

#### Notes:

- The schema uses Mongoose for ODM (Object Document Mapping)
- Timestamps are automatically managed by Mongoose
- All subdocuments (projects, work) automatically receive their own `_id` fields
- Email uniqueness is enforced at the database level
