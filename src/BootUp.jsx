import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { useNavigate } from 'react-router-dom';

function BootUp() {
  const typedRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [isFinished, setIsFinished] = useState(false);

  const bootMessages = [
    '<span class="text-green-500">[ OK ]</span> Starting the site\nLoading ...',
    '<span class="text-red-500">[ ERROR ]</span> Unexpected error occurred',
    '<span class="text-green-500">[ OK ]</span> Retrying\nLoading ...',
    '<span class="text-red-500">[ ERROR ]</span> It\'s failed, sorry :(',
    '...',
    '<span class="text-red-500">[ ERROR ]</span> Still fai-',
    '<span class="text-green-500">[ OK ]</span> SUCCESS!',
    '<span class="text-green-500">[ OK ]</span> Please press ENTER/RETURN to continue'
  ];

  useEffect(() => {
    if (currentIndex < bootMessages.length) {
      const options = {
        strings: [bootMessages[currentIndex]],
        typeSpeed: 30,
        backSpeed: 20,
        backDelay: 1000,
        startDelay: currentIndex === 0 ? 500 : 0,
        showCursor: false,
        onComplete: () => {
          setMessages((prev) => [...prev, bootMessages[currentIndex]]);
          setCurrentIndex((prev) => prev + 1);
        },
      };

      const typed = new Typed(typedRef.current, options);

      return () => typed.destroy();
    } else {
      setIsFinished(true);
    }
  }, [currentIndex]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isFinished) {
      navigate('/terminal');
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [isFinished, navigate]);

  return (
    <div className="fixed inset-0 bg-black flex items-start justify-start p-4 overflow-auto">
      <div className="w-full max-w-2xl border border-green-500 p-4 rounded-sm shadow-[0_0_10px_rgba(0,255,0,0.5)]">
        {messages.map((message, index) => (
          <div key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: message }} />
        ))}
        <div ref={typedRef} className="mb-2"></div>
      </div>
    </div>
  );
}

export default BootUp;