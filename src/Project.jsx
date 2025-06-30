import Taskbar from './Taskbar';
import Kotlin from './assets/tech/Kotlin.png';
import Swift from './assets/tech/Swift.png';
import PostgreSQL from './assets/tech/PostgreSQL.png';
import React from './assets/tech/React.png';
import Docker from './assets/tech/Docker.png';
import JavaScript from './assets/tech/JavaScript.png';
import HTML from './assets/tech/HTML.png';
import CSS from './assets/tech/CSS.png';

function Project() {
  const projects = [
    {
      title: 'Universal Fitness',
      technologies: ['Kotlin', 'Swift', 'PostgreSQL', 'React', 'Docker'],
      period: 'August 2024 - December 2024',
      description: [
        'Developed a cross-platform fitness app with Kotlin Multiplatform to log workouts, macros, provide fitness news, and include social sharing.',
        'Built and integrated a Dockerized PostgreSQL backend, enabling real-time data storage and retrieval for workouts and nutrition logs. React front-end server used to display information conveniently.',
        'Designed and deployed a modular, scalable architecture with shared Compose UI code and platform-specific logic for Android (tested) and potential iOS compatibility.',
      ],
      icon: '🏋️',
    },
    {
      title: 'AniFinder',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      period: 'February 2024 - May 2024',
      description: [
        'Show generator powered by Google’s Gemini AI.',
        'User queries (genre, reference) are sent to the AI for response through API queries.',
        'Google Custom Search API used to fetch an image related to the returned show.',
      ],
      icon: '📺',
      link: 'https://anifinder.peternguyen.me/',
    },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br flex flex-col items-center p-4 overflow-auto pb-[100px]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1%, transparent 1%)',backgroundSize: '20px 20px', }}>
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">My Projects</h1>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative p-6 rounded-lg bg-gray-800 bg-opacity-70 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{project.icon}</span>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
            </div>
            <p className="text-sm text-gray-400 mb-2">{project.period}</p>
            <div className="mb-4">
              {project.description.map((desc, i) => (
                <p key={i} className="text-gray-300 mb-1">• {desc}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.technologies.map((tech, i) => {
                const techImages = { Kotlin, Swift, PostgreSQL, React, Docker, JavaScript, HTML, CSS };
                const image = techImages[tech];
                return image ? (
                  <img
                    key={i}
                    src={image}
                    alt={`${tech} logo`}
                    className="inline-block w-8 h-8 object-contain rounded bg-opacity-30 border-2 border-blue-500 border-opacity-50 hover:scale-110 hover:shadow-md transition-all duration-300"
                  />
                ) : null;
              })}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 text-green-400 hover:text-green-300 transition-colors"
                aria-label={`Link to ${project.title} project`}
              >
                🔗
              </a>
            )}
          </div>
        ))}
      </div>

      <Taskbar />
    </div>
  );
}

export default Project;