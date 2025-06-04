import Taskbar from './Taskbar';
import JavaIcon from './assets/tech/Java.png'
import JavaScriptIcon from './assets/tech/JavaScript.png'
import PythonIcon from './assets/tech/Python.png'
import HTMLIcon from './assets/tech/HTML.png'
import CSSIcon from './assets/tech/CSS.png'
import CIcon from './assets/tech/C.png'
import SQLIcon from './assets/tech/SQL.png'
import KotlinIcon from './assets/tech/Kotlin.png'
import GitIcon from './assets/tech/Git.png'
import SvelteIcon from './assets/tech/Svelte.png'
import GitHubIcon from './assets/tech/Github.png'
import SwiftIcon from './assets/tech/Swift.png'
import NodeJSIcon from './assets/tech/NodeJS.png'
import ReactIcon from './assets/tech/React.png'
import AWSIcon from './assets/tech/AWS.png'
import DockerIcon from './assets/tech/Docker.png'


function AboutMe() {
  const skills = [
    { name: 'Java', icon: JavaIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
    { name: 'C', icon: CIcon },
    { name: 'SQL', icon: SQLIcon },
    { name: 'Kotlin', icon: KotlinIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'Svelte', icon: SvelteIcon },
    { name: 'Github', icon: GitHubIcon },
    { name: 'Swift', icon: SwiftIcon },
    { name: 'Node.js', icon: NodeJSIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'AWS', icon: AWSIcon },
    { name: 'Docker', icon: DockerIcon },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-purple-700 flex flex-col items-center p-4 overflow-auto" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1%, transparent 1%)', backgroundSize: '20px 20px' }}>
      {/* header */}
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">About Me</h1>
        <p className="text-lg text-gray-300">Get to know the developer behind the code</p>
      </div>

      {/* introduction */}
      <div className="w-full max-w-4xl mb-8">
        <div className="p-6 rounded-lg bg-gray-800 bg-opacity-70 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]">
          <h2 className="text-2xl font-semibold mb-4">Who Am I?</h2>
          <p className="text-gray-300">
            I’m a passionate full-stack developer with a knack for building innovative web and mobile applications. With a foundation in computer science and hands-on experience in Agile environments, I thrive on solving complex problems using modern technologies. My journey includes creating cross-platform apps, optimizing cloud infrastructure, and exploring AI-driven solutions. When I’m not coding, you’ll find me exploring new tech trends or enjoying a good sci-fi movies.
          </p>
        </div>
      </div>

      {/* skills */}
      <div className="w-full max-w-4xl">
        <div className="p-6 rounded-lg bg-gray-800 bg-opacity-70 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]">
          <h2 className="text-2xl font-semibold mb-6 text-center">My Skills</h2>
          {(() => {
            const sortedSkills = [...skills].sort((a, b) => a.name.length - b.name.length);
            const rows = [];
            const rowCounts = [1, 2, 3, 4, 5];
            let index = 0;
            for (let count of rowCounts) {
              if (index >= sortedSkills.length) break;
              rows.push(sortedSkills.slice(index, index + count));
              index += count;
            }
            return rows.map((row, i) => (
              <div key={i} className="flex justify-center gap-4 mb-3">
                {row.map((skill, j) => (
                  <div key={j} className="flex items-center bg-opacity-30 border-2 border-blue-500 border-opacity-50 rounded-lg p-2 hover:bg-opacity-50 transition-all duration-300 group">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 mr-2 object-contain transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg"
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            ));
          })()}
        </div>
      </div>

      <Taskbar />
    </div>
  );
}

export default AboutMe;