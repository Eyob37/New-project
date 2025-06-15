import React from 'react';
import { Github, Mail, MessageSquare, Download, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1 mb-6 mx-auto">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Code size={48} className="text-blue-600 dark:text-teal-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Eyob
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Passionate Programmer & Web Developer
        </p>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting elegant solutions through code. I turn ideas into reality with modern technologies and clean, efficient programming.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
            <Download size={20} />
            Download Resume
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-blue-600 dark:border-teal-400 text-blue-600 dark:text-teal-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/eyob"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:eyob@example.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://t.me/eyob"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
          >
            <MessageSquare size={24} />
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;