import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Shutdown() {
  const [status, setStatus] = useState('Preparing to shut down...');
  const [countdown, setCountdown] = useState(5);
  const [isShutdownComplete, setIsShutdownComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setStatus('System is offline.');
          setIsShutdownComplete(true);
          return 0;
        }
        setStatus(`Shutting down in ${prev - 1} seconds...`);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleReboot = () => {
    navigate('/');
  };

  return (
    <div className="shutdown-screen">
      <div className="shutdown-terminal">
        <p className="shutdown-status">{status}</p>
        {isShutdownComplete && (
          <button className="reboot-button" onClick={handleReboot}>
            Reboot System
          </button>
        )}
      </div>
    </div>
  );
}

export default Shutdown;
