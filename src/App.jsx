import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const inputContainerRef = useRef(null);
  const navigate = useNavigate();
  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      let newOutput = [...output];
      if (command === 'help') {
        newOutput.push('Available commands:\n start: access GUI\n clear: clear the terminal\n shutdown: shutdown the site');
      } else if (command === 'clear') {
        newOutput = [];
      } else if (command === 'start') {
        navigate('/desktop');
      } else if (command === 'shutdown') {
        navigate('/shutdown');
      } else if (command) {
        newOutput.push(`Command not recognized: ${command}`);
      }
      setOutput(newOutput);
      setInput('');
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        setInput('');
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  const asciiPeter = [
    '  ____  _____  _____ _____  ____',  
    '|  _ \\| ____||_   _| ____||  _  |\\',
    '| |_)| |  _|    | | |  |_| | | |_)|',
    '|  __/|| |___   | || |___||  _ < ',
    '|_|   ||_____|  |_||_____||_| \\_|',
  ];

  useEffect(() => {
    if (inputContainerRef.current) {
      inputContainerRef.current.scrollTo({ left: inputContainerRef.current.scrollWidth, behavior: 'smooth' });
    }
  }, [input]);

  return (
    <div className="fixed inset-0 bg-black flex items-start justify-start p-4 overflow-auto">
      <div className="w-full max-w-2xl border border-green-500 p-4 rounded-sm shadow-[0_0_10px_rgba(0,255,0,0.5)] overflow-x-auto scrollbar-hidden">
        <div className="mb-4">
          {asciiPeter.map((line, i) => (
            <div key={i} className="text-cyan-400 text-sm whitespace-nowrap">
              {line}
            </div>
          ))}
        </div>
        {output.map((line, index) => (
          <div key={index} className="mb-2 whitespace-pre">~$ {line}</div>
        ))}
        <div className="relative mb-2">
          <div ref={inputContainerRef} className="whitespace-nowrap overflow-x-auto scrollbar-hidden">
            ~$ <span>{input}</span><span className="animate-blink">|</span>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleCommand}
            className="absolute inset-0 w-full h-full bg-transparent text-green-500 outline-none opacity-0"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}

export default App;