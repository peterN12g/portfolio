import Taskbar from './Taskbar';

function Work() {
  const workExperiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'BrBytes',
      website: 'https://www.brbytes.org',
      period: 'May 2024 - Present',
      description:
        'Full-stack development of the BRBytes homepage, teacher portal, and lesson editor. Improved UX with responsive Alpine.js components and API integrations using Postman. Redesigned backend database for scalability. Worked in a Scrum team using Agile methodologies.',
      icon: '💻',
    },
    {
      title: 'Cloud Security Engineer Intern',
      company: 'Orca Security',
      website: 'https://orca.security',
      period: 'June 2024 - Present',
      description:
        'Contributed to cloud security operations by deploying Kubernetes clusters on AWS/GCP, integrating Jira Cloud and ServiceNow ITSM/SIR, and enhancing automated API testing with a custom differ. Investigated data mirroring and reference anomalies, reported backend bugs. Shadowed customer calls to deepen understanding of cloud security workflows and enterprise integrations.',
      icon: '🐳',
    },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-purple-700 flex flex-col items-center p-4 overflow-auto pb-[100px]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1%, transparent 1%)', backgroundSize: '20px 20px',}}>
      <div className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Work Experience</h1>
        <p className="text-lg text-gray-300">
          A journey through my professional endeavors
        </p>
      </div>

      <div className="w-full max-w-3xl relative">
        <div className="hidden sm:block border-l-4 border-green-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>

        {workExperiences.map((exp, index) => (
          <div
            key={index}
            className={`
              mb-8 flex w-full
              ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}
              justify-center
            `}
          >
            <div
              className={`
                w-full sm:w-5/12 p-4 rounded-lg bg-gray-800 bg-opacity-70 text-white shadow-lg
                transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]
                ${index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'}
              `}
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{exp.icon}</span>
                <h2 className="text-xl font-semibold">{exp.title}</h2>
              </div>
              <h3 className="text-lg mb-1">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  {exp.company}
                </a>
              </h3>
              <p className="text-sm text-gray-400 italic mb-2">{exp.period}</p>
              <p className="text-white text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Taskbar />
    </div>
  );
}

export default Work;
