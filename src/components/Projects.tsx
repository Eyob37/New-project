import React from 'react';
import { ExternalLink, Github, Code, Zap, Globe, Database } from 'lucide-react';
import chatImage from '../Image/Chat app.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  icon: React.ReactNode;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI and secure payment integration.',
      longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart, and Stripe payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://ecommerce-demo.example.com',
      githubUrl: 'https://github.com/eyob/ecommerce-platform',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Globe className="w-6 h-6" />,
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Intuitive task management application with drag-and-drop functionality.',
      longDescription: 'A productivity-focused task management application featuring drag-and-drop task organization, project categorization, and team collaboration tools.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      liveUrl: 'https://taskmanager-demo.example.com',
      githubUrl: 'https://github.com/eyob/task-manager',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Zap className="w-6 h-6" />,
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with detailed forecasts and location tracking.',
      longDescription: 'An elegant weather dashboard that provides detailed weather information, 7-day forecasts, and interactive maps with location-based weather data.',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      liveUrl: 'https://weather-app-demo.example.com',
      githubUrl: 'https://github.com/eyob/weather-dashboard',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Code className="w-6 h-6" />,
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      description: 'Content management system for creative professionals to showcase their work.',
      longDescription: 'A custom CMS built for creative professionals to easily manage and showcase their portfolio, with drag-and-drop editing and responsive themes.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://portfolio-cms-demo.example.com',
      githubUrl: 'https://github.com/eyob/portfolio-cms',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Database className="w-6 h-6" />,
      featured: false
    },
    {
      id: 5,
      title: 'Code Snippet Manager',
      description: 'Organize and share code snippets with syntax highlighting and tags.',
      longDescription: 'A developer tool for organizing, sharing, and discovering code snippets with syntax highlighting, tagging system, and community features.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://snippets-demo.example.com',
      githubUrl: 'https://github.com/eyob/code-snippets',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Code className="w-6 h-6" />,
      featured: true
    },
    {
      id: 6,
      title: ' Chat App',
      description: 'Modern chat application with real-time messaging and file sharing.',
      longDescription: 'A real-time chat application featuring instant messaging, file sharing, group chats, and user presence indicators built with modern web technologies.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://eyobchat.vercel.app/',
      image: chatImage,
      icon: <Globe className="w-6 h-6" />,
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg text-blue-600 dark:text-teal-400">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-height-relaxed">
                  {project.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-teal-400 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-200"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/eyob"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-teal-400 text-blue-600 dark:text-teal-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
