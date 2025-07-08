import React from 'react';
import { ExternalLink, Github, Code, Zap, Globe, Database } from 'lucide-react';
import chatImage from '../Image/ChatAp.jpg';
import FirstLight from '../Image/Best.jpg';
import TradeJornal from '../Image/Trade Jornal.jpg';
import EyobLanguage from '../Image/Eyob language.jpg';

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
      title: 'FirstLight',
      description: 'Best my first and best project',
      longDescription: 'This project brings together a suite of web-based utilities and games— \n from calculators for math and geometry to classic brain teasers and real-time chat powered by Firebase. Everything is designed to belightweight, responsive, and user-friendly. Dive in and enjoy!',
      technologies: ['HTML', 'CSS ', 'JavaScript'],
      liveUrl: 'https://best-organized.vercel.app/',
      githubUrl: 'https://github.com/eyob/ecommerce-platform',
      image: FirstLight,
      icon: <Globe className="w-6 h-6" />,
      featured: true
    },
    {
      id: 2,
      title: 'Trade Jornal',
      description: 'jornal for traders, It can be able to write jornal',
      longDescription: 'This is simple jornal for traders, and hou can write your emotion, reason why it happened, picture of the trade, risk reward ratio and etc... and you can save your data to restore by uploading your file. check it 😉',
      technologies: ['HTML', 'CSS ', 'JavaScript'],
      liveUrl: 'https://alazar-sproject.vercel.app/',
      githubUrl: 'https://alazar-sproject.vercel.app/',
      image: TradeJornal,
      icon: <Zap className="w-6 h-6" />,
      featured: true
    },
    {
      id: 3,
      title: 'Eyob Language',
      description: 'Best Language web that any one know it',
      longDescription: 'This is EyobLanguage created by me. and it is simple to use. you can change letter, word, sentence what ever you want except emoji and Punctuation mark. It is fully created by me. so, there is no body that can translate my language. so it is secret',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://weather-app-demo.example.com',
      githubUrl: 'https://github.com/eyob/weather-dashboard',
      image: EyobLanguage,
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
      title: 'Eyob Language',
      description: 'Best Language web that any one know it',
      longDescription: 'This is EyobLanguage created by me. and it is simple to use. you can change letter, word, sentence what ever you want except emoji and Punctuation mark. It is fully created by me. so, there is no body that can translate my language. so it is secret.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://eyob-s-language.vercel.app/',
      githubUrl: 'https://github.com/eyob/code-snippets',
      image: EyobLanguage,
      icon: <Code className="w-6 h-6" />,
      featured: true
    },
    {
      id: 6,
      title: 'Real-time Chat App',
      description: 'Modern chat application with real-time messaging and file sharing.',
      longDescription: 'A real-time chat application featuring instant messaging, file sharing, group chats, and user presence indicators built with modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
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

       
  );
};

export default Projects;
