import Taskbar from './Taskbar';

function Projects() {

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
      link: '#',
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
      link: '#',
    },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-purple-700 flex flex-col items-center p-4 overflow-auto" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1%, transparent 1%)', backgroundSize: '20px 20px' }}>
      {/* header */}
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">My Projects</h1>
        <p className="text-lg text-gray-300">A showcase of my technical endeavors</p>
      </div>

      {/* project Cards */}
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
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 text-green-400 hover:text-green-300 transition-colors"
              aria-label={`Link to ${project.title} project`}
            >
              🔗
            </a>
          </div>
        ))}
      </div>

      <Taskbar />
    </div>
  );
}

export default Projects;