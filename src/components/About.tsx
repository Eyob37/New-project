import React from 'react';
import { Code2, Coffee, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'C++', 'Python'
  ];

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges with creative solutions'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Oriented',
      description: 'Focused on delivering results and continuous improvement'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Passionate',
      description: 'Driven by curiosity and the joy of building something amazing'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Programming Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Welcome to my world of code! I'm a passionate programmer who believes that 
                great software is born from the perfect blend of creativity, logic, and 
                relentless curiosity. My journey began with a simple "Hello, World!" and 
                has evolved into crafting complex, elegant solutions.
              </p>
              <p>
                I thrive on turning challenging problems into clean, efficient code. 
                Whether it's building responsive web applications, optimizing algorithms, 
                or diving deep into system architecture, I approach each project with 
                enthusiasm and attention to detail.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and staying 
                ahead of the curve in this ever-evolving field.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Favorite Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-blue-600 dark:text-teal-400 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;