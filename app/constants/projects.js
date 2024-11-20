import { images } from './images';

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" }
];

export const projects = [
  {
    id: 1,
    title: "Halal Jibika",
    description: "A job portal platform for connecting employers and job seekers",
    image: images.projects.halalJibika,
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://halal-jibika.vercel.app",
    githubUrl: "https://github.com/yourusername/halal-jibika"
  },
  {
    id: 2,
    title: "E-Learning Platform",
    description: "Online learning platform with course management and video lessons",
    image: images.projects.eLearning,
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://e-learning-platform.vercel.app",
    githubUrl: "https://github.com/yourusername/e-learning"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Modern portfolio website built with Next.js and Tailwind CSS",
    image: images.projects.portfolio,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    liveUrl: "https://your-portfolio.vercel.app",
    githubUrl: "https://github.com/yourusername/portfolio"
  },
  {
    id: 4,
    title: "Task Manager API",
    description: "RESTful API for task management with authentication",
    image: images.projects.taskManager,
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "backend",
    githubUrl: "https://github.com/yourusername/task-manager-api"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Real-time weather application with location search",
    image: images.projects.weather,
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://weather-dashboard.vercel.app",
    githubUrl: "https://github.com/yourusername/weather-dashboard"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with rooms and private messaging",
    image: images.projects.chat,
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "fullstack",
    liveUrl: "https://chat-app.vercel.app",
    githubUrl: "https://github.com/yourusername/chat-app"
  },
  {
    id: 7,
    title: "E-commerce API",
    description: "Comprehensive API for e-commerce platform",
    image: images.projects.ecommerce,
    technologies: ["Node.js", "Express.js", "MongoDB", "Stripe"],
    category: "backend",
    githubUrl: "https://github.com/yourusername/ecommerce-api"
  },
  {
    id: 8,
    title: "Movie Database",
    description: "Movie information and review platform",
    image: images.projects.movie,
    technologies: ["React", "TMDB API", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://movie-db.vercel.app",
    githubUrl: "https://github.com/yourusername/movie-database"
  }
]; 