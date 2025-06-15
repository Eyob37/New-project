import React from 'react';
import { Calendar, Award, Users, Code, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  type: 'work' | 'education' | 'certificate';
  title: string;
  organization: string;
  period: string;
  description: string[];
  technologies?: string[];
  link?: string;
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Frontend Developer',
      organization: 'TechStart Solutions',
      period: 'Jan 2023 - Present',
      description: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer (Freelance)',
      organization: 'Various Clients',
      period: 'Jun 2022 - Dec 2022',
      description: [
        'Built custom web applications for small businesses and startups',
        'Managed complete project lifecycle from requirements to deployment',
        'Integrated third-party APIs and payment systems',
        'Provided ongoing maintenance and technical support'
      ],
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 3,
      type: 'certificate',
      title: 'Full Stack Web Developer Nanodegree',
      organization: 'Udacity',
      period: 'Completed: May 2022',
      description: [
        'Comprehensive program covering frontend and backend development',
        'Built 4 full-stack projects including a restaurant review app',
        'Learned modern web development practices and deployment strategies',
        'Gained expertise in database design and API development'
      ],
      technologies: ['Python', 'Flask', 'PostgreSQL', 'HTML/CSS/JS'],
      link: 'https://www.udacity.com/certificate/abc123',
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 4,
      type: 'education',
      title: 'Computer Science Student',
      organization: 'Local University',
      period: '2021 - 2024',
      description: [
        'Studying algorithms, data structures, and software engineering principles',
        'Participated in programming competitions and hackathons',
        'Completed coursework in database systems and web technologies',
        'Maintained a 3.8 GPA while working part-time as a developer'
      ],
      technologies: ['Java', 'C++', 'Python', 'SQL'],
      icon: <Calendar className="w-5 h-5" />
    },
    {
      id: 5,
      type: 'work',
      title: 'Web Development Intern',
      organization: 'Digital Marketing Agency',
      period: 'Mar 2021 - Aug 2021',
      description: [
        'Assisted in developing client websites using HTML, CSS, and JavaScript',
        'Learned version control with Git and collaborative development',
        'Supported the team with testing and debugging web applications',
        'Gained experience with responsive design and cross-browser compatibility'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
      icon: <Code className="w-5 h-5" />
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-blue-600';
      case 'education':
        return 'from-green-500 to-green-600';
      case 'certificate':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return 'Work Experience';
      case 'education':
        return 'Education';
      case 'certificate':
        return 'Certification';
      default:
        return 'Experience';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through education, certifications, and professional experience in software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full hidden md:block z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${getTypeColor(experience.type)} text-white rounded-lg`}>
                          {experience.icon}
                        </div>
                        <div>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            {getTypeLabel(experience.type)}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                        </div>
                      </div>
                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-200"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-lg font-medium text-blue-600 dark:text-teal-400">
                        {experience.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                        <Calendar size={14} />
                        {experience.period}
                      </p>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {experience.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;