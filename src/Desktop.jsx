import { useNavigate } from 'react-router-dom';
import Taskbar from './Taskbar.jsx';

function Desktop() {
  const navigate = useNavigate();

  const apps = [
    { name: 'Work Experience', icon: '💼', path: '/work' },
    { name: 'Projects', icon: '📂', path: '/projects' },
    { name: 'About Me', icon: '👤', path: '/about' },
    { name: 'Terminal', icon: '🖥️', path: '/terminal' },
  ];

  const handleAppClick = (path) => {
    navigate(path);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-purple-700 flex flex-col items-center justify-between p-4 overflow-auto" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1%, transparent 1%)', backgroundSize: '20px 20px' }}>
      {/* icons */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {apps.map((app, index) => (
          <div key={index} className="text-center cursor-pointer hover:scale-110 transition-transform" onClick={() => handleAppClick(app.path)}>
            <div className="text-4xl mb-2">{app.icon}</div>
            <div className="text-white text-sm">{app.name}</div>
          </div>
        ))}
      </div>
      <Taskbar />
    </div>
  );
}

export default Desktop;