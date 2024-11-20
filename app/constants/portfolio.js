import { images } from './images';

export const portfolioStats = [
  {
    value: '5+',
    label: 'Years Experience'
  },
  {
    value: '50+',
    label: 'Projects Completed'
  },
  {
    value: '30+',
    label: 'Happy Clients'
  },
  {
    value: '100%',
    label: 'Client Satisfaction'
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'design', label: 'UI/UX Design' }
];

export const projects = [
  {
    id: 'halal-jibika',
    title: 'Halal Jibika',
    description: 'Job portal for halal businesses',
    category: 'web',
    image: images.projects.halalJibika,
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 'e-learning',
    title: 'E-Learning Platform',
    description: 'Online learning management system',
    category: 'web',
    image: images.projects.eLearning,
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  }
]; 