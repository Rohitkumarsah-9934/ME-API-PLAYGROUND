const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Profile = require('./models/Profile');

dotenv.config();

const seedData = {
  name: "John Doe",
  email: "john.doe@example.com",
  education: "Bachelor of Technology in Computer Science, XYZ University (2019-2023)",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Python",
    "Express.js",
    "Tailwind CSS",
    "Git",
    "RESTful APIs",
    "Docker"
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard. Built using MERN stack with Redux for state management.",
      links: "https://github.com/johndoe/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with drag-and-drop functionality, team collaboration features, and deadline tracking. Uses React, Node.js, and Socket.io.",
      links: "https://github.com/johndoe/task-manager"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard that displays current weather and forecasts using OpenWeather API. Features responsive design with Tailwind CSS and data visualization.",
      links: "https://github.com/johndoe/weather-dashboard"
    },
    {
      title: "Blog Platform",
      description: "Content management system for blogging with markdown support, commenting system, and SEO optimization. Built with Next.js and MongoDB.",
      links: "https://github.com/johndoe/blog-platform"
    },
    {
      title: "Python Data Analysis Tool",
      description: "Data analysis and visualization tool using Python, Pandas, and Matplotlib. Includes automated report generation and statistical analysis features.",
      links: "https://github.com/johndoe/data-analysis-tool"
    }
  ],
  work: [
    {
      company: "Tech Solutions Inc.",
      position: "Junior Full Stack Developer",
      duration: "Jan 2023 - Present",
      description: "Developing and maintaining web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer Intern",
      duration: "Jun 2022 - Dec 2022",
      description: "Built responsive user interfaces using React and Tailwind CSS. Implemented features for the company's main product and fixed critical bugs."
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Jan 2021 - May 2022",
      description: "Worked on various client projects including portfolio websites, landing pages, and small business websites. Managed full project lifecycle from requirements to deployment."
    }
  ],
  links: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    portfolio: "https://johndoe.dev"
  }
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    // Clear existing data
    await Profile.deleteMany({});
    console.log('Existing profiles cleared');

    // Insert seed data
    const profile = await Profile.create(seedData);
    console.log('Seed data inserted successfully');
    console.log('Profile created:', profile.name);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
